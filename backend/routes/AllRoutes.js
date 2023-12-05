module.exports = (app)=>{
    app.use("/api/auth",require("../routes/AuthRoute"))
    app.use("/api/user",require("../routes/UserRoute"))
    app.use("/api/message",require("../routes/Message"))
    app.use("/api/chat",require("../routes/ChatRoute"))
    app.use("/api/notification",require("../routes/Notification"))
}