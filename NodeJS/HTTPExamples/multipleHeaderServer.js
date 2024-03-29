const http = require("http");
const queryString = require("querystring");

const server = http.createServer((request, response) => {
  if (request.url === "/greeting") {
    return handleGreetingRequest(request, response);
  }
  if (request.url === "/json") {
    return handleJsonRequest(request, response);
  }
  if (request.url.match("/echo")) {
    return handleEcho(request, response);
  }
  if (request.url.match("userdata")) {
    return handleUserData(request, response);
  }
  resourceNotFound(request, response);
});

const handleUserData = (request, response) => {
  let data = "";
  if (request.method == "POST") {
    request.on("data", (input) => {
      data = data + input;
      console.log("reading data" + data);
    });

    request.on("end", () => {
      console.log("Your data is readed successfully");
      response.end(data);
    });

    request.on("error", (error) => {
      console.log(error);
    });
  } else {
    request.statusCode = 405;
    response.end("MATCH NOT ALLOWED");
  }
};

const handleEcho = (request, response) => {
  let value = " ";
  const { input } = queryString.parse(request.url.split("?").slice(1) + value);

  response.setHeader("Content-Type", "application/json");
  response.end(
    JSON.stringify({
      Normal: input,
      Capitalize: input.toUpperCase(),
      ContentLength: input.length,
      Reverse: input.split("").reverse().join(""),
    })
  );
};

const handleGreetingRequest = (request, response) => {
  console.log(request.method);
  if (request.method === "GET") {
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello world, Welcome to Node js");
  } else {
    response.statusCode = 405;
    response.statusMessage = "METHOD-NOT-ALLOWED";
    response.end("METHOD NOT ALLOWED");
  }
};

const handleJsonRequest = (request, response) => {
  if (request.method === "GET") {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ name: "jhon", age: 21 }));
  } else {
    response.statusCode = 405;
    response.statusMessage = "METHOD-NOT-ALLOWED";
    response.end("Method Not Allowed");
  }
};

const resourceNotFound = (request, response) => {
  response.statusCode = 404;
  response.statusMessage = "NOT-FOUND";
  response.end("REQUESTED RESOURCE NOT FOUND");
};

server.listen(8000, () => {
  console.log("Server is running succesfully");
});
