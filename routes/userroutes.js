import express from "express";
import {
  createPrduct,
  getapi,
  product,
  updateapi,
} from "../controller/user.js";

export const userRouter = express.Router();
userRouter
  .post("/", createPrduct)

  .get("/", getapi)

  .get("/:id", product)

  .put("/:id", updateapi);
