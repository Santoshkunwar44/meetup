const mongoose = require("mongoose")

const ChatSchema = mongoose.Schema({
    chat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chat"
    },
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    text:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Message",ChatSchema)