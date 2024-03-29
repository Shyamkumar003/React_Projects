const fs = require("fs");
const path = require("path");

const readingfile = (readFile) => {
  readFile(
    path.join(__dirname, "files", "sample.txt"),
    "utf-8",
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
};

readingfile(fs.readFile);

process.on("uncaughtException", (err) => {
  console.log("Their is an uncought Err " + err);
  process.exit(1);
});
