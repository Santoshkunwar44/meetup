const Notification = require("../model/Notification")
const { createNotificationText } = require("../services/NotificationService")

class NotificationController{
    async createNotification(req,res){

        try {  
            req.body.text = await createNotificationText(req.body)
            let  notification = await Notification.create(req.body)
            notification = await Notification.populate(notification, {
            path: "from",
            select: ["firstName", "lastName", "image"],
            model: "User",
        });

        notification = await Notification.populate(notification, {
            path: "post",
            select: ["_id", "image", "user"],
            model: "Post",
        });


                res.status(200).json({message:notification,success:true})
        } catch (error) {
                console.log(error)
                res.status(500).json({message:error.message,success:false})
        }
    }

    async getNotificationOfUser(req,res){
        const {userId} = req.params;
        try {
            let  notifications = await Notification.find({to:userId}).sort({createdAt:-1}).populate({
                path:"from",
                select:["firstName","lastName","image","_id"],
                model:"User"
            });
             notifications = await Notification.populate(notifications, {
            path: "post",
            select: ["_id", "image", "user"],
            model: "Post",
        });

            res.status(200).json({message:notifications,success:true})


        } catch (error) {
            console.log(error)
            res.status(500).json({message:error.message,success:false})
            
        }
    }

    async markAsSeen(req,res){
        try {

            await Notification.updateMany(
            {
                seen:false,
            },{
                $set:{
                    seen:true
                }
            }
            )
            res.status(200).json({success:true ,message:"sucessfully updated"})
        } catch (error) {
            res.status(500).json({message:error.message,success:false})
        }
    }
}
module.exports = new NotificationController();

