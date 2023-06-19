const mongoose=require("mongoose")

const mongouri="mongodb://0.0.0.0:27017/sparkBank2" 
// const mongouri="mongodb+srv://adityakumar:aditya@cluster0.wckodqw.mongodb.net/?retryWrites=true&w=majority"
 

const connectTomongo=async ()=>{ 
    
  try{  
    mongoose.set('strictQuery', false);
    mongoose.connect(mongouri)
    await console.log("connected successfully") 
  
}
  catch(err){ 

      console.log("fjdfh")
    }
}
module.exports=connectTomongo;