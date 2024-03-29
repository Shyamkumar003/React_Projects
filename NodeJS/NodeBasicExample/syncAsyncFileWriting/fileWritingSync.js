const fs = require("fs");

console.log("Start");

try {
  fs.writeFileSync("sample.txt", "Hello World! from Syncronized ");
} catch (error) {
  console.log(error);
}

console.log("end");


