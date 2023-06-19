const mongoose = require("mongoose")
// const {Schema} =mongoose
const TransferH=new mongoose.Schema({
    nameTo:{
        type:String,
        require:true
    },
    nameFrom:{
        type:String,
        require:true
    },
    Debits:{
        type:Number,
        default:null
    },
    Credits:{
        type:Number,
        default:null
       
    },
    
    date:{
        type:Date,
        default:Date.now
    }
})
const TransferHistory =mongoose.model("TransferHistory",TransferH)
// User.createIndexes();
module.exports=TransferHistory