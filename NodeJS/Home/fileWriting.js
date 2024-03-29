const fs = require("fs");
const path = require("path");

fs.writeFile(
  path.join(__dirname, "files", "sample2.txt"),
  "Hi, this file is written by fs.writeFile module on files directory",
  (err) => {
    if (err) throw err;
    console.log("Your file is written successfully");
    fs.appendFile(
      path.join(__dirname, "files", "sample2.txt"),
      "\n\n This is an appended content for append file module",
      (err) => {
        if (err) throw err;
        console.log("successfully append the content");
        fs.rename(
          path.join(__dirname, "files", "sample2.txt"),
          path.join(__dirname, "files", "renamedFile.txt"),
          (err) => {
            if (err) throw err;
            console.log("Your file is renamed successfully");
          }
        );
      }
    );
  }
);
