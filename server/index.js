const express=require('express')
const server=express()
const cors=require('cors')
server.use(express.json())
server.use(cors())
server.use('/users',require('./cruds/users.js'))
server.use('/movies',require('./cruds/movies.js'))


server.listen(5000,()=>{
    console.log('server started succesfully');
})