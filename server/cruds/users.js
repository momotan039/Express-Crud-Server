const express=require('express')
const router=express.Router()
const fs=require('fs')
const path = require('path');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

router.get('/',(req,res)=>{
    const users=JSON.parse(fs.readFileSync(path.join(__dirname,'..','utils/usersData.json'),'utf8'))
    res.send(users)
})

router.post('/signup',(req,res)=>{
    const user=req.body;
    const users=JSON.parse(fs.readFileSync(path.join(__dirname,'..','utils/usersData.json'),'utf8'))
    const temp=users.find(f=>f.username===user.username)

    if(temp)
    {
        res.status(400).json({
            msg:'This User Already Exists'
        })
        return
    }

    //hash the password
    user.password= bcrypt.hashSync(user.password,10)
    // save it to users
    users.push(user)
    fs.writeFileSync(path.join(__dirname,'..','utils/usersData.json'),JSON.stringify(users))
    res.json({
        msg:'sign up done succesfully , Please Signin to Compolete',
    })
})

router.post('/signin',(req,res)=>{
  const user = req.body;
  const users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "utils/usersData.json"), "utf8")
  );

  //get user from database
  const temp = users.find((f) => f.username === user.username);

  if(!temp){
    res.status(404).json({
      msg: "One Of Theses fields incorrect!!!",
    });
    return;
  }

  const isMatchPassword = bcrypt.compareSync(user.password, temp.password);
  if(!isMatchPassword){
    res.status(404).json({
      msg: "One Of Theses fields incorrect!!!",
    });
    return;
  }
  // create the token
  const token = jwt.sign(
    { role: "user", username: temp.username },
    "myseqtokvery",
    {
      expiresIn: "2m",
    }
  );

  res.status(201).json({
    msg: "sign in done succesfully",
    token: token,
  });

})

module.exports=router