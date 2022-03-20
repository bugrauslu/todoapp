const express=require('express');

const mongoose=require('mongoose');





const app=express();




mongoose.connect("mongodb://127.0.0.1/todo_express",);



app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

app.set("view engine","ejs");


app.use(require("./routes/index"))


app.use(require("./routes/todo"))







app.listen(4000,()=>{
    console.log("4000 portundan başladı");
}) 