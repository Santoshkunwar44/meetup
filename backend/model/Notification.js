const mongoose = require('mongoose');
const { FOLLOW_TYPE, LIKE_TYPE, COMMENT_TYPE ,FOLLOW_BACK} = require('../utils/Enums');
const NotificationSchema = mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enums:[FOLLOW_TYPE,LIKE_TYPE,COMMENT_TYPE,FOLLOW_BACK]
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
    },
    seen:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports = mongoose.model("Notification",NotificationSchema)

