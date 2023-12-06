const NotificationModel = require("../model/Notification")
const ChatModel = require("../model/Chat")

class OtherController{

    async getStatsOfUser(req,res,next){

        const {userId} = req.params;

        try {

          const unseenChatCount  = await ChatModel.find({
              users:{$in:[userId]},   
              seen: { $nin: [userId] }
            }).count();

          const unseenNotificationCount = await NotificationModel.find({
            to:userId,
            seen:false
          }).count();


          res.status(200).json({ message :  { unseenChatCount , unseenNotificationCount }})

        } catch (error) {

            res.status(500).json({ message: error.message ,success:false});

        }
    }
    async getStatsOfUser(req,res,next){

        const {userId} = req.params;

        try {

          const unseenChatCount  = await ChatModel.find({
              users:{$in:[userId]},   
              seen: { $nin: [userId] }
          }).count();


          const unseenNotificationCount = await NotificationModel.find({
            to:userId,
            seen:false
          }).count()

          
          res.status(200).json({ message :  { unseenChatCount , unseenNotificationCount }})



        } catch (error) {
            res.status(500).json({ message: error.message ,success:false});
        }
    }

}
module.exports = new OtherController()
