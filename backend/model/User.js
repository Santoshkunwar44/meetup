const mongoose = require("mongoose")

const ChatSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"https://i.pinimg.com/564x/e5/6b/02/e56b02089275a812ebbf975f47b8f768.jpg"  
    },
    isAdmin:{
        type:String,
        default:false
    }
},{timestamps:true})

module.exports = mongoose.model("User",ChatSchema)
