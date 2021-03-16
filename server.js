const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors())
// this use is used for all middleware
 app.get("/",(req,res,next)=>{
    res.end("we are friends!!!")
 })
 app.post("/ds",(req,res,next)=>{
        res.status(201);
        res.send("we are best friends!!!!");
        res.end();
 })

 app.get("/myname",(req,res,next)=>
 {
     res.status(200);
     res.send({
         name:"dixita"
     })
     res.end();

 })

 const PORT=process.env.PORT || 4000
 //PROCESS IS AN OBJECT ENV IS A OBJECT AND PORT IS A VARIABLE

 app.listen(PORT,()=>{
     return console.log("we are  using nodemon on  port 4000");
 });