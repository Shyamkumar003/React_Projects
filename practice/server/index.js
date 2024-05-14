const express = require('express')
const cors = require('cors')
const multer = require('multer');
const { productRouter } = require('./Router/ProductRouter');
const morgan = require('morgan');


const app = express();
app.use(express.json());
app.use(cors())
app.use(morgan('dev'));
app.use(express.static('static'))


// const router = express.Router();

app.use('/products', productRouter)

app.listen(8000,()=>{
  console.log("server started");
})

 //File uploading create from and to destination(first create folder static/images)
const storage = multer.diskStorage({
  destination : function(req,file,cb){
    cb(null, 'static/images')
  },
  filename: function(req,file,cb){
    cb(null,file.originalname)
  }
});

const upload = multer({storage:storage})



app.post('/image/upload', upload.single('file'), (req,res)=>{
  console.log(req.file);
  if(!req.file){
    return res.status(404).send("No file found to upload")
  }
  res.send(req.file)
})

 
  