const mongoose = require("mongoose")
const PostSchema = mongoose.Schema({
    title:{
        type:String,
    },
    image:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    likes:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    ],
    comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    },
   
},{timestamps:true})

module.exports =mongoose.model("Post",PostSchema)

