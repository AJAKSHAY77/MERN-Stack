import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";

// import morgan from "morgan";
import { productRouter } from "./routes/routes.js";
import { userRouter } from "./routes/userroutes.js";
// const { Schema } = mongoose;

// console.log("env", process.env.DB_PASSWORD);

//db conection

mongoose.connect("mongodb://127.0.0.1:27017/flipkart");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/flipkart");

  console.log("db is connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



const server = express();
server.use(express.json());
server.use(express.static("public"));
server.use("/api", productRouter);
server.use("/userapi", userRouter);

// logger midleware

// const auth = (req, res, next) => {
//   console.log(
//     req.params,
//     req.ip,
//     req.hostname,
//     req.get("user-content"),
//     new Date()
//   );
//   next();
// };

// const auth2 = (req,res,next) => {
//     // console.log(req.query);

//     if (req.body.password=="123") {
//         next()
//     }
//     else {
//         res.sendStatus(401)
//     }
// }

// application middleware !

// server.use(auth);
// server.use(auth2)

// making apis or paths !

server.listen(process.env.PORT, () => {
  console.log("server started");
});
