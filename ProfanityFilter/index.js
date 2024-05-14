const express = require("express");
const cors = require("cors");
const Filter = require("bad-words");
const cache = require("memory-cache")

const app = express();
app.use(express.json());
app.use(cors());


//Type 1 ProfanityFilter 
const filter = new Filter();


app.post('/post',(req,res)=>{
    const {content} = req.body;
    const filteredContent = filter.clean(content);
    console.log(filteredContent);

    res.send(filteredContent);
});

//Type 2 postModeration

function moderatePost(req,res,next){
    const {content} = req.body;
    if(content.includes("hate") || content.includes("bad"))
    res.status(403).send('content contains inappropriate words');

else  next();

}

app.post('/post1', moderatePost,(req,res)=>{
    const {content} = req.body;
    res.send(`your content  "${content}" is inserted succesfully`);
    console.log(content);
});


//Memory Caching optimization  
function cacheMiddleware(duration){
    return (req,res,next)=>{
    const key = '__express__' + req.originalUrl || req.originalUrl
    const cacheResponse = cache.get(key);

    if(cacheResponse){
        res.send(cacheResponse)
        return;
    }else{
        res.sendResponse = res.send;
        res.send = (body)=>{
            cache.put(key,body,duration*1000);
            res.sendResponse(body);
        };
        next();
    }
    };
}

app.get('/data', cacheMiddleware(60), (req,res)=>{
    setTimeout(()=>{
        res.send("Cached data" + Math.random()*100+1);
    },5000)
} )


app.listen(8080,()=>{
    console.log("server stared.....")
})