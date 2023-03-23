const express=require('express')
const router=express.Router()
const fs=require('fs')
const path = require('path');
const bcrypt = require('bcrypt');
const myJwt=require('../services/jwt')

router.get('/',(req,res)=>{
    const userPayLoad=myJwt.verifyToken(req.cookies.token)
    if(typeof(userPayLoad)==='string')
    {
      res.status(400).send(userPayLoad)
      return
    }
    if(userPayLoad.role!=='admin'){
      res.status(401).send('You don\'t have permision to do that!!!')
      return
    }    
    const users=JSON.parse(fs.readFileSync(path.join(__dirname,'..','db/usersData.json'),'utf8'))
    res.send(users)
})

router.post('/signup',(req,res)=>{
    const user=req.body;
    const users=JSON.parse(fs.readFileSync(path.join(__dirname,'..','db/usersData.json'),'utf8'))
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
    fs.writeFileSync(path.join(__dirname,'..','db/usersData.json'),JSON.stringify(users))
    res.json({
        msg:'sign up done succesfully , Please Signin to Compolete',
    })
})

router.post('/signin',(req,res)=>{
  const user = req.body;
  const users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "db/usersData.json"), "utf8")
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
  const token=myJwt.genearteToken(temp)
  
  //save the token in cookie
  res.cookie('token',token,{httpOnly:true})
  
  //copeied user without password
  const {password,...copy_user}=temp

  res.status(201).json({
    msg: "sign in done succesfully",
    user:copy_user
  });

})

module.exports=router