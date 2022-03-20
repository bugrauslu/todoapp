const router = require('express').Router();
const Todo=require("../models/todo");


router.post("/add/todo",(req,res)=>{
    const {todo}=req.body;
    const newTodo=new Todo({todo})
        console.log(newTodo)
    newTodo.save().then(() => {
        console.log("başarıyla eklendi");
        res.redirect("/")
    }).catch((err) => {
        console.log(err);
    });


})



router.get("/delete/todo/:_id",(req,res)=>{
    const{_id}=req.params;

    Todo.deleteOne({_id})
    .then(()=>{console.log("silindi " +_id) 
    res.redirect("/")
}).catch(err=>{
    console.log(err);
})

})












module.exports=router;