const mongoose = require("mongoose")
// const {Schema} =mongoose
const userschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
   
    Mo_number:{
        type:Number,
        require:true
    }, 
    amount:{
        type:Number,
        require:true
    },
    account:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const User =mongoose.model("user",userschema)
// User.createIndexes();
module.exports=User