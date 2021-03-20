//Import
const express=require('express');
const app=express();

const cors=require('cors');
const mongoose=require('mongoose');
const User=require("./api/models/user");


const DB_URI="mongodb+srv://dixita:dixita1234@ecomm-backend.tmgie.mongodb.net/ecommerce_backend?retryWrites=true&w=majority"
// here ecommerce_backend is a collection basically
//apna variable define karte ho then const variable is a capital
// this is mongoose.connect a promise
mongoose.connect(DB_URI,{
   useNewUrlParser:true,
   useCreateIndex:true,
   useUnifiedTopology:true
}).then(()=>console.log("Mongodb is connected"))
 .catch(err=>console.error(err))
 // one parameter or one argument no need of parameters


// global level middlewares


app.use(cors())
app.use(
    express.urlencoded({
      extended: true
    })
  )
  //body aari h sahi se pass karna h
  app.use(express.json())
// this use is used for all middleware
 app.get("/pg",(req,res,next)=>{
    res.end("we are friends!!!")
 })

 //API level middlewares
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
 app.post("/sub", (req, res) => {
    let n1 = req.body?.num1
    let n2 = req.body?.num2
    console.log(`Value from POST ${n1} + ${n2} = ${n1 + n2}`);
    res.status(200).send(req.body)
  })

  app.post("/users",(req,res,next)=>{
    console.log(req.body);
    
    const user=new User({
      _id: new mongoose.Types.ObjectId(),
      // model mein bola kya lega object id yaha bolre h exact value kya chahiye object id ki
      email:req.body.email,
      username:req.body.name,
      //schema mein bola ye chiz bnare h // yaha bolre mein is chiz mein ye value
      password:req.body.password

    });
    user
    .save().
    then(result=>
    // save se jo result aaya usko then mein result variable mein save
    {
      console.log("this is result")
      console.log(result +" ")
      res.status(201).json({
        message:"user created",
        user :result 

     })
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error:err
      })
    })
     // sabkuch sucees hota h client ko kya bhejhna h wo bnare h
   
    

 
  })
  
 

 const PORT=process.env.PORT || 4000
 //PROCESS IS AN OBJECT ENV IS A OBJECT AND PORT IS A VARIABLE

 app.listen(PORT,()=>{
     return console.log("we are  using nodemon on  port 4000");
 });