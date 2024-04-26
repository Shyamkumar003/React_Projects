const path = require('path')
console.log(path);
console.log(__dirname);
console.log(__filename);
console.log(path.dirname(`D:\REACTTT\NodeJS\pathDemo.js`));
console.log(path.basename(`D:\REACTTT\NodeJS\pathDemo.js`));
console.log(path.parse(`D:\REACTTT\NodeJS\pathDemo.js`));
console.log(path.isAbsolute(`D:\REACTTT\NodeJS\pathDemo.js`));
console.log(path.resolve(`\REACTTT`, `pathDemo.js`));
console.log(path.relative(`\REACTTT`, `pathDemo.js`));

const fs = require('fs')

let dirPath = path.join(__dirname,"static","images")

fs.mkdir(dirPath, {recursive:true},(err)=>{  //{recursive:true} used if there is no main directory like REACTTT
    if(err) console.log(err);
})

fs.writeFile(path.join(dirath,'mytext.txt'),'hi i am sunil',(err)=>{
    if(err) console.log(err);
})