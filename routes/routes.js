import express from "express"
import {
  createPrduct,
  getapi,
  product,
  updateapi,
} from "../controller/product.js";


export  const productRouter  = express.Router()
productRouter
  .post("/products", createPrduct)

  .get("/products", getapi)

  .get("/products/:id", product)

  .put("/products/:id", updateapi);
