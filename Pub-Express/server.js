const express = require('express')
const app = express();
app.use(express.json())
app.set('view engine', 'pub')
app.set('views','./views')

app.get('/home',(req,res)=>{
    res.render('home',{})
})

app.get('/greet',(req,res)=>{
  res.render('greet', {name :'john'})
})

app.listen(8080,()=>{
    console.log('server started');
})