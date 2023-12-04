const Enums = require("../utils/Enums");
const { OnlineUsers, AppUser } = require("../services/SocketService");





function socket(io ,EventEmiter){



io.on("connection", (socket) => {



    socket.on(Enums.JOIN,(userId)=>{
        if(OnlineUsers.getUser(userId))return;
        socket.join(socket.id)
        const newUser =  new AppUser(socket.id,userId)
        OnlineUsers.addUser(newUser)
        OnlineUsers.sendOnlineUsers(io)
    })

    socket.on(Enums.MESSAGE,(message)=>{
        const {nextUser} = message; 
        const user = OnlineUsers.getUser(nextUser)
        user.sendMessage(io,message)
    })

    socket.on(Enums.NOTIFICATION,(info)=>{
        const {nextUser} = info; 
        const user = OnlineUsers.getUser(nextUser)
        if(!user)return;
        user.sendNotification(io,info)
    })

   
    socket.on(Enums.LEAVE,userId=>{
        OnlineUsers.removeUser(userId);
        OnlineUsers.sendOnlineUsers(io)
    })

    socket.on("disconnect",()=>{
        OnlineUsers.removeUserBySocketId(socket.id)
        OnlineUsers.sendOnlineUsers(io)
    })
})




}
module.exports =  {socket};