const fs = require("fs");

console.log("start");
fs.writeFile("sample.txt", " Hello World! from Asyncronized", (error) => {
  if (error) {
    console.log(`error : ${error}`);
  } else {
    console.log(`Content is Written successfully`);
  }
});

console.log("end");
