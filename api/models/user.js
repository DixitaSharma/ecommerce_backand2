const mongoose=require('mongoose');
//TABLE KA STRUCTURE BNARE H 
const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:{
        type:String,
        required:true,
        unique:true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

mongoose.exports = mongoose.model("User",userSchema);
// SCHEMA KA NAME CAPITAL HOTA H 'User'
//model is a connection to TABLE TO DATABASE
// data kuch bhi dalna model se dalenge......IMPORTANT

