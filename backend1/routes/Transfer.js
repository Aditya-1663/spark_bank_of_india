const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../schema/customerschema");
const Transfer = require("../schema/Transfersh");
const TransferHistory = require("../schema/TransferHistory");

 
 
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { type } = require("@testing-library/user-event/dist/type");

//adding user 
router.post(
    "/transfer",
    [
        body("name1", "enter the valid name1").isLength({ min: 3 }),
        body("name2", "enter the valid name2").isLength({ min: 3 }),
        body("email1", "enter the valid email1").isEmail(),
        body("email2", "enter the valid email2").isEmail(),


        body("transfer_amount", "password must be 6 charter").isNumeric(),
    ],
    async (req, res) => {

        let success = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        try {

            let firstperson = await User.findOne({ email: req.body.email1 });
            let secondperson = await User.findOne({ email: req.body.email2 });



            if (!firstperson) {
                success = false
                return res
                    .status(400)
                    .json({ success, error: "Sorry!  this applicant not exists" });
            }
            if (!secondperson) {
                success = false
                return res
                    .status(400)
                    .json({ success, error: "Sorry!  this beneficiary not exists" });
            }
            if (firstperson.id === secondperson.id) {
                success = false
                return res
                    .status(400)
                    .json({ success, error: "Sorry a both people are same" });
            }
            //   const slat=await bcrypt.genSalt(10)
            //   const  secpass=await bcrypt.hash(req.body.password,slat)

            if (firstperson.amount < req.body.transfer_amount) {
                success = false
                return res
                    .status(400)
                    .json({ success, error: "enter vaild amount" });

            }

            //tranfering money
            const newfirstamount = firstperson.amount - req.body.transfer_amount;
            //firstperson.amount = firstperson.amount - req.body.transfer_amount;
            const newsecondsamount = parseInt(secondperson.amount) + parseInt(req.body.transfer_amount);
            // secondperson.amount= parseInt(secondperson.amount) + parseInt(req.body.transfer_amount);



            const firstupdate = {};
            const secondupdate={};

            firstupdate.amount=newfirstamount;
            secondupdate.amount=newsecondsamount;
           let userto = await TransferHistory.create({
                nameTo: secondperson.name,
                nameFrom: firstperson.name,
                Debits: req.body.transfer_amount
              });
           let userfrom = await TransferHistory.create({
                nameFrom: secondperson.name,
                nameTo: firstperson.name,
                Credits: req.body.transfer_amount
              });
            // let user = await User.findById(firstperson.id)
         
            // if (!user) { return res.status(404).send('Not found'+user) }
            success=true
            newu = await User.findByIdAndUpdate(firstperson.id, { $set: firstupdate }, { new: true })
            new2 = await User.findByIdAndUpdate(secondperson.id, { $set: secondupdate }, { new: true })
            res.json({ success, error: "Transfer succesfully"  })



           
        }
        catch (err) { console.log("sorry") }
    }
);


// transfer history
router.get("/transferHistory", async (req, res) => {
    try {
        const his = await TransferHistory.find();
        res.json(his);
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;