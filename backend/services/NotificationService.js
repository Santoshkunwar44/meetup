const UserModel = require("../model/User");
const Enums = require("../utils/Enums");

class NotificationService{
    async createNotificationText(data){

        const {from,type} = data;
        const fromUser = await  UserModel.findById(from);
        let text ; 

        switch (type) {
            case Enums.FOLLOW_TYPE:
                text = `${fromUser.firstName} ${fromUser.lastName} started following you . `
                break;
        
            case Enums.COMMENT_TYPE:
                text = `${fromUser.firstName} ${fromUser.lastName} commented on  your post . `
                break;
        
            case Enums.LIKE_TYPE:
                text = `${fromUser.firstName} ${fromUser.lastName} liked your post . `
                break;
        
            case Enums.FOLLOW_BACK:
                text = `${fromUser.firstName} ${fromUser.lastName} followed  you back . `
                break;
            default:
                text="Unknown "
                break;
        }

        return text;



    }
}
module.exports = new NotificationService()

