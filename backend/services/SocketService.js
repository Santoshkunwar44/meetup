const Enums = require("../utils/Enums");


class OnlineUsers{
    static usersList=[];

   static addUser(user){
    
    this.usersList.push(user)        

    }

    static getUser(userId){

      return  this.usersList.find(user=>user.userId === userId)

    }

    static removeUser(userId){

        this.usersList =  this.usersList.filter(user=>user.userId !== userId)

    }
    static removeUserBySocketId(socketId){
         this.usersList =  this.usersList.filter(user=>user.socketId !== socketId)
    }
    static  sendOnlineUsers(io){
        io.emit(Enums.SEND_ONLINE_USERS,this.usersList);
    }
}

class AppUser{


    constructor(socketId,userId){
        this.socketId = socketId;
        this.userId = userId;
    }


     sendMessage(io,message){
       io.to(this.socketId).emit(Enums.SEND_MESSAGE,message);
    }
    
     sendNotification(io,message){
        io.to(this.socketId).emit(Enums.SEND_NOTIFICATION,message);
    }

   

}

module.exports = {AppUser,OnlineUsers}