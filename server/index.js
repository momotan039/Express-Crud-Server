const express=require('express')
const server=express()
const cors=require('cors')
var cookieParser = require('cookie-parser')


server.use(express.json())
server.use(cors({origin:'http://localhost:5173',credentials:true}))
server.use(cookieParser())
server.use('/users',require('./cruds/users.js'))
server.use('/movies',require('./cruds/movies.js'))

server.listen(5000,()=>{
    console.log('server started succesfully');
})