const express=require('express')
const server=express()
const cors=require('cors')
var cookieParser = require('cookie-parser')
var MongoClient = require('mongodb').MongoClient


server.use(express.json())
server.use(cors({origin:'http://localhost:5173',credentials:true}))
server.use(cookieParser())
server.use('/users',require('./cruds/users.js'))
server.use('/movies',require('./cruds/movies.js'))

const uri = "mongodb+srv://momotaha039:0LR7XA7JI7jpBqii@cluster0.0x5nbdj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
var database=null
client.connect().then((result) => {
    database=result.db('sample_training')
    console.log('Connected succsefully to mongodb server');
}).catch((err) => {
    console.log(err);
});

server.get('/',async (req,res)=>{
// res.send()
const grade=await database.collection('grades').findOne()
res.send(grade)
})
server.listen(5000,()=>{
    console.log('server started succesfully');
})