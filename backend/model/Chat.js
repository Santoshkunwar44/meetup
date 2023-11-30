const mongoose = require("mongoose")

const ChatSchema = mongoose.Schema({
    name:{
        type:String,
        default:"",
    },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    },
    isGroup:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports = mongoose.model("Chat",ChatSchema)