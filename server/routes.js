const express=require('express');
const mongoose = require('mongoose');
const router=express.Router()
const User =mongoose.model('User');

router.get('/',(req,res)=>{
    User.find({})
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{res.status(422).json({error:err})})
})

router.post('/form',(req,res)=>{
    const {name,email,amount,loantype,phone}=req.body;
    if(!name || !email || !amount || !loantype || !phone)
    {
        res.status(422).json({error:"Fill all the details"})
    }
    const user=new User({
        name,email,amount,loantype,phone
    })
    user.save()
    .then((result)=>{
        res.status(200).json({message:result})
    })
    .catch((err)=>{
        res.status(422).json({error:"Error occur"})
    })
})


module.exports=router