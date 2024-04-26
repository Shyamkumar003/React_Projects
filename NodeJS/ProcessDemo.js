const fs = require('fs')
console.log(process);

process.stdin.setEncoding('utf-8')

process.stdin.on("data" , (data)=>  //asynchronous function
{
    console.log("enter the data" + data);

    fs.appendFile(`userInput.txt`, `${data}/n`, (err)=>{
     if(err)
       console.log("cannot write the file");
    })
    if(data.trim()==="exit") process.exit()


})
process.stdout.write(`Hello from stdOut\n`)
process.stderr.write(`process stdErr\n`)