const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TaskModel = require('./model')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017')



app.listen(8000,()=>{
    console.log('server running')
})

app.post('/add', (req,res)=>{
    console.log(req.body)
    try{
   const task = req.body;
    console.log(task);
    TaskModel.create({
        //  task:task
        name : task.name,
        age : task.age,
        address : task.address

    })
    .then(result => console.log(result))

    .then(err=> {return res.status(500).json({error:error.message})}  )
    }  
     catch (error) {
        return res.status(500).json({error:error.message});
       }
    

});


app.get('/get', (req, res) => {
    TaskModel.find()
      .then(result => {
        return res.status(200).json({ message: result }); // Use 'result' instead of 'data'
      })
      .catch(err => console.log(err))
  })
  app.post('/test', async (req, res) => {
    try {
        const task = req.body;
        const result = await TaskModel.create({
            name: task.name,
            age: task.age,
            address: task.address
        });

        // Fetch all data after creating the new entry
        const data = await TaskModel.find();

        return res.status(200).json({ message: "message success", result: data });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
});
