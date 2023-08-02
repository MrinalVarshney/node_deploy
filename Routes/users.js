const express = require("express");
const ProductsController = require("../Controllers/users");
const router= express.Router();


router
  .post("/", ProductsController.createUser)
  .get("/", ProductsController.getAllUsers)
  .get("/:id", ProductsController.getUser)
  .put("/:id", ProductsController.replaceUser)
  .patch("/:id", ProductsController.updateUser)
  .delete("/:id", ProductsController.deleteUser);

exports.router=router