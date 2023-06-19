const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../schema/customerschema"); 
const mongoose=require("mongoose")


var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { ObjectId } = require("mongoose");

//adding user 
router.post(
    "/createuser",
    [
      body("name", "enter the valid name").isLength({ min: 3 }),
      body("email", "enter the valid email").isEmail(), 
     
      body("Mo_number", "Moblie number").isNumeric().isLength(10),
      body("amount", "password must be 6 charter").isNumeric(),
    ],
    async (req, res) => {
     
      let success=false
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
      }
    try{
  
    
      //check whether the email is exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success=false
        return res
          .status(400)
          .json({  success, error: "Sorry a user with this already exists" });
      } 
    //   const slat=await bcrypt.genSalt(10)
    //   const  secpass=await bcrypt.hash(req.body.password,slat)
      // user=await User.create({
      //   name: "sdf",
      // })
      // const abd=async()=>{
        user = await  User.create({
          name: req.body.name,
          email: req.body.email,
          Mo_number: req.body.Mo_number,
          amount: req.body.amount,
          address:req.body.address,
          account:Math.floor(Math.random()*100000000000)
          
          
        });
      // }
      // abd()
        
    //  console.log("adasghdj")
       
      success=true 
      res.json({ success,user})
  }
      catch(err){
        res
        .status(400)
        .json({  success, error: "Sorry ",err });}
    }
  );

// find data

router.put("/finddata/:id", async (req, res) => {
  try {
  
// let data =await User.findById(ObjectId(req.params.id))
const data = await User.findOne({_id:(req.params.id)});
// console.log(req.params.id)
// console.log(data)
if(!data){return res.status(404).send('Not found')}
// console.log(data.name)
res.json({data})

  } catch (error) {
      console.log(error);
  }
});



  // gettingdata
  router.get("/allcustomers", async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        console.log(error);
    }
});



  
module.exports = router;