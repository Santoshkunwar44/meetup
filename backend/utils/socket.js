const Enums = require("../utils/Enums");
const { OnlineUsers, AppUser } = require("../services/SocketService");





 module.exports = (io )=>{



io.on("connection", (socket) => {

    console.log("incoming signal")

    socket.on(Enums.JOIN,(userId)=>{
        if(OnlineUsers.getUser(userId))return;
        console.log("someone joined")
        socket.join(socket.id)
        const newUser =  new AppUser(socket.id,userId)
        OnlineUsers.addUser(newUser)
        OnlineUsers.sendOnlineUsers(io)
    })

    socket.on(Enums.MESSAGE,(message)=>{
        const {nextUser} = message; 
        console.log("incoming message",nextUser)
        const user = OnlineUsers.getUser(nextUser)
        if(!user)return;
        user.sendMessage(io,message)
    })

    socket.on(Enums.NOTIFICATION,(info)=>{
        console.log("incoming notification",info)
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
