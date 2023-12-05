const mongoose = require('mongoose');
const { FOLLOW_TYPE, LIKE_TYPE, COMMENT_TYPE } = require('../utils/Enums');

const NotificationSchema = mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enums:[FOLLOW_TYPE,LIKE_TYPE,COMMENT_TYPE]
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    
},{timestamps:true})

module.exports = mongoose.model("Notification",NotificationSchema)

