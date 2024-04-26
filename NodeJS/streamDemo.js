const stream = require('stream')
const fs = require('fs');
const { error } = require('console');

const tunnel = new stream.PassThrough(); //it is a type of duplex stream //passthrough is a stream class method 

const readStream = fs.createReadStream('newfile.txt') //read the content of this file

const writeStream = fs.createWriteStream('Copynewfile.txt') // write the content of the file 

tunnel.on('data', (data)=>{
    console.log(data.toString());
})

readStream.pipe(tunnel).pipe(writeStream) // read stream ==> tunnel event triggger and stores ==> write stream 

readStream.on('error' , (error)=>{
    console.log(error);

})

writeStream.on('error' , (error)=>{
    console.log(error);
})