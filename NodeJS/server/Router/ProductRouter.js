 const express = require('express')
 const productRouter = express.Router();
 const logger = require('../logger')
  
 const {adding,deleting,update,getting,edit} = require('../Controller/ProductController')



productRouter.post("/adding" , logger,adding)

productRouter.get("/getting", logger,getting)

productRouter.delete('/delete/:id', logger,deleting)

productRouter.get("/edit/:id", logger,edit);
  
  productRouter.put("/update",logger, update);

  module.exports = {productRouter}
  