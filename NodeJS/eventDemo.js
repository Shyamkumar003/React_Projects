const {EventEmitter} = require('stream')

const MyEvent = new EventEmitter();
let value=11;
let balance = 100;
MyEvent.on('EvenEmit', ()=>{
    console.log("Even number");
})
MyEvent.on('OddEmit', ()=>{
    console.log('Odd number');
})

if(value/2==0){
    MyEvent.emit("EventEmit")
}
else MyEvent.emit("OddEmit")


//ReadStream

const fs = require('fs');
const { error } = require('console');
const readStream = fs.createReadStream("sample.txt",'utf-8');  //read the contemt of the file in chunks
const writeStream = fs.createWriteStream('newFile.txt','utf-8');

readStream.pipe(writeStream)
readStream.on('data',(chunk)=>{
    // readStream.pipe(writeStream)
    console.log(chunk);
})

readStream.on('end',()=>{
    console.log('End')
})

readStream.on('error',()=>{
    console.log('error')
})

writeStream.on('error',(error)=>{
    console.log(error)
})

