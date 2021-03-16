const express=require('express');
const app=express();
 app.get("/",(req,res,next)=>{
    res.end("we are friends!!!")
 })
 app.post("/dixita",(req,res,next)=>{
        res.status(201);
        res.send("we are best friends!!!!");
        res.end();
 })

 app.listen(4000,()=>{
     return console.log("we are  using nodemon on  port 4000");
 });