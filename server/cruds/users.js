const express=require('express')
const router=express.Router()
const fs=require('fs')
const path = require('path');

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

    // save it to users
    users.push(user)
    fs.writeFileSync(path.join(__dirname,'..','utils/usersData.json'),JSON.stringify(users))
    
    res.json({
        msg:'sign up done succesfully'
    })
})

router.post('/signin',(req,res)=>{
    const user=req.body;
    console.log(user);
    const users=JSON.parse(fs.readFileSync(path.join(__dirname,'..','utils/usersData.json'),'utf8'))
    const temp=users.find(f=>f.username===user.username && f.password===user.password)

    if(!temp)
    {
        res.status(404).json({
            msg:'This User not Exists'
        })
        return
    }

    res.json({
        msg:'sign in done succesfully'
    })
})

module.exports=router