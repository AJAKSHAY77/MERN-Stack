import dotenv from "dotenv"
dotenv.config();
import express from "express";
// import morgan from "morgan";
import { productRouter } from "./routes/routes.js";
import { userRouter } from "./routes/userroutes.js";

console.log('env',process.env.DB_PASSWORD);

const server = express();
server.use(express.json());
server.use(express.static("public"));
server.use("/api", productRouter);
server.use("/userapi",userRouter)

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
