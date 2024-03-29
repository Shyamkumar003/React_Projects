const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify({ name: "Jhon", age: 22 }));
});


server.listen(8000, () => {
  console.log("Listening to port number 8000");
});
