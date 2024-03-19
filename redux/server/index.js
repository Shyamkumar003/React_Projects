const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017')



app.listen(3001,()=>{
    console.log('server running')
})

app.post('/add', (req,res)=>{
    console.log(req.body)
   const task = req.body.todoInput;
    console.log(task);
    TodoModel.create({
        task:task
    }).then(result => res.json(result))
    .catch(err => res.json(err))

})

app.get('/get', (req,res)=>{
    TodoModel.find().then(result=> res.json(result)).catch(err=> res.json(err))
})