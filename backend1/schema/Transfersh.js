const mongoose = require("mongoose")
// const {Schema} =mongoose
const Transferschema=new mongoose.Schema({
    name1:{
        type:String,
        require:true  
    },
    name2:{
        type:String,
        require:true
    },
    email1:{
        type:String,
        require:true,
        unique:true
    },
    email2:{
        type:String,
        require:true,
        unique:true
    },
    transfer_amount:{
        type:Number,
        require:true,
        
    },
    
    date:{
        type:Date,
        default:Date.now
    }
})
const Transfer =mongoose.model("Transfer",Transferschema)
// User.createIndexes();
module.exports=Transfer