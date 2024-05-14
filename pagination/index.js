const express = require("express");
const app = express();
const port = 3000;
const data = [];
for(let i =0; i<100;i++){
  data.push(`item ${i}`);
  }

  app.use(express.json());

  app.get("/items", (req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex= (page-1)*limit;
    const endIndex = page*limit;

    const results = {};
    if(endIndex<data.length){
        results.next={
        page : page + 1,
        limit: limit,
        }
    };
    if(startIndex>0){
        results.previous={
            page : page-1,
            limit :limit,
        }
    }

    results.current = data.slice(startIndex,endIndex);
    res.json(results);

  });

  app.listen(port, ()=>{
    console.log("server started");
  })
