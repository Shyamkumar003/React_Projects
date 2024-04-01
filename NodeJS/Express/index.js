const express = require("express");

const app = express();
app.use(express.json());

app.listen(8000, () => {
  console.log("running on port 8000");
});

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
    "input": input,
    "capitalize": input.toUpperCase(),
    "content-length": input.length,
    "reverse": input.split("").reverse().join(),
  });
});


app.post("/add", (request, response) => {
    const {num1,num2} = request.body
    const sum = num1+num2;
    console.log(`${num1} + ${num2} is ${sum}`);
    response.json(sum);
  });

  app.get("/welcome/:name", (request,response)=>{
    const name = request.params.name;
    response.end("welcome"+ name)
  })