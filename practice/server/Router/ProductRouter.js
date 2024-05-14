const express = require("express");
const productRouter = express.Router();
// const = require("../);

const {
  adding,
  deleting,
  update,
  getting,
  edit,
} = require("../Controller/ProductController");

productRouter.post("/adding",  adding);

productRouter.get("/getting",  getting);

productRouter.delete("/delete/:id",  deleting);

productRouter.get("/edit/:id",  edit);

productRouter.put("/update",  update);

module.exports = { productRouter };
