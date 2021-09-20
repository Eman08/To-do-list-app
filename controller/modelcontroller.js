const todolist=require('./../model');

exports.writeItems=async(req,res)=>{


    const tasks=new todolist({
        task:req.body.task
    });

    try{
        
        await tasks.save();
        res.redirect('/');
    } 
    
    catch(error){
        
    res.status(404).json({
        status:'fail',
        message:error
    })
    console.log(error);
    }


}


exports.getAllItems= async (req,res)=>{

   todolist.find({},(err,task)=>{
       res.render("main.ejs",{toDoTasks:task});
   });

}

exports.deleteitems=async(req,res)=>{

    const id=req.params.id;
    todolist.findByIdAndDelete(id,error=>{
        console.log(error);
    });
    res.redirect("/");
}