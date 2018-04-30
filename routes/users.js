const express = require('express');
const router = express.Router();

const User = require('../models/users')

router.post('/notifyme', (req, res, next) =>{
  let newUser = new User({
    email: req.body.email,
  })

  User.addEmail(newUser, (err, user)=>{
    if(err){
      res.json({success:false, msg: "failed to register"})
    } else {
      res.json({sucess:true, msg: "registered email"})
    }
  })})


module.exports = router;
