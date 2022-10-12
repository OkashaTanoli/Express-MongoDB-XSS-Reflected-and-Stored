const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    text:{
        type:String,
        required:[true,"Name is required"],
        
    },
    image:{
        type:String,
        required:[true,"image is required"]
    }
})

module.exports = mongoose.model("myTasks",TaskSchema);