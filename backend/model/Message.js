const mongoose = require("mongoose")

const ChatSchema = mongoose.Schema({
    chatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chat"
    },
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    text:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Message",ChatSchema)