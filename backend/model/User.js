const mongoose = require("mongoose")

const ChatSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        min:[3,"FirstName should be more than 3 characters"]
    },
    lastName:{
        type:String,
        required:true,
        min:[3,"lastName should be more than 3 characters"]
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
    },
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    follwings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    lastLoggedIn:{
        type:Number
    }
},{timestamps:true})

module.exports = mongoose.model("User",ChatSchema)