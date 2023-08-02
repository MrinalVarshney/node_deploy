const express = require("express");
const ProductsController = require("../Controllers/product");
const router= express.Router();


router
  .post("/", ProductsController.createProduct)
  .get("/", ProductsController.getAllProduct)
  .get("/:id", ProductsController.getProduct)
  .put("/:id", ProductsController.replaceProduct)
  .patch("/:id", ProductsController.updateProduct)
  .delete("/:id", ProductsController.deleteProduct);

exports.router=router