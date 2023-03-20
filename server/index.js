const express=require('express')
const server=express()
server.use(express.json())

server.use('/users',require('./cruds/users.js'))


server.listen(5000,()=>{
    console.log('server started succesfully');
})