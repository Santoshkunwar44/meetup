const Notification = require("../model/Notification")
const { createNotificationText } = require("../services/NotificationService")

class NotificationController{
    async createNotification(req,res){
        try {  
                req.body.text = await createNotificationText(req.body)
                const notification = await Notification.create(req.body)
                res.status(201).json({message:notification,success:true})
        } catch (error) {
                console.log(error)
                res.status(500).json({message:error.message,success:false})
        }
    }
}
module.exports = new NotificationController();

