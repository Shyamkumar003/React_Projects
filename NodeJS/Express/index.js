const express = require("express");

const app = express();
app.use(express.json());

app.listen(8000, () => {
  console.log("running on port 8000");
});

let items = [
  { id: 1, name: "Parker Pen", price: 200 },
  { id: 2, name: "Cello Pen", price: 100 },
  { id: 3, name: "Rorito Pen", price: 200 },
  { id: 4, name: "Hauser Pen", price: 400 },
  { id: 5, name: "Flair Pen", price: 220 },
];

app.get("/", (request, response) => {
  response.end("hi there just got");
});

app.post("/data", (request, response) => {
  console.log(request.body);
  response.end("post method here");
});

app.post("/echo", (request, response) => {
  const input = request.query.input;
  console.log(input);
  response.json({
    input: input,
    capitalize: input.toUpperCase(),
    "content-length": input.length,
    reverse: input.split("").reverse().join(),
  });
});

app.post("/add", (request, response) => {
  const { num1, num2 } = request.body;
  const sum = num1 + num2;
  console.log(`${num1} + ${num2} is ${sum}`);
  response.json(sum);
});

app.get("/welcome/:name", (request, response) => {
  const name = request.params.name;
  response.end("welcome" + name);
});

app.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  const item = items.find((item) => item.id == id);

  if (item) res.json(item);
  else res.status(404).json({ error: error });
});

app.put("/update", (req, res) => {
  const data = req.body;
  const item = items.map((it) => {
    if (it.id == data.id) {
      (it.name = data.name), (it.price = data.price);
      return it;
    } else {
      return it;
    }
  });
  res.json(item);
});

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
  res.send("File upload succes")
})

