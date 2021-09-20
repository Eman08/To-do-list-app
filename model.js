const mongoose=require('mongoose');

const listSchema=mongoose.Schema({
    task:{
        type:String,
      
    }
})

const todolist=mongoose.model('todolist',listSchema);
module.exports=todolist;