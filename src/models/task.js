const mongoose=require('mongoose')

const TaskSchema=mongoose.Schema({
    description:{
        type:String
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
},{
    timestamps:true
})

const Task = mongoose.model('Task',TaskSchema)

module.exports=Task