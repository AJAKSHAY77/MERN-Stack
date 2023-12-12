
import http from "http"
import fs from "fs"

// const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

import express from "express";
import morgan from "morgan";
import { log } from "console";
import bodyparcer from "body-parser"


const server = express()

// server.use(morgan("default"))
server.use(express.json())

// // server.use(express.static("public"))

// server.use((req,res,next) => {
//     console.log(req.method);
//     next()
// })
// api or endpoint
server.get("/", (req, res) => {
    console.log("server started");
    res.status(200).send(data.products[0]);   
})


server.post("/products", (req, res) => {
    console.log(req.body);
    
        res.json({type:'post'})
})


server.delete("/", (req,res) => {
    res.status(200).send("<h1>akshay</h1>");   
})
server.put("/", (req,res) => {
    res.status(200).send("<h1>akshay</h1>");   
})
server.delete("/", (req,res) => {
    res.status(200).send("<h1>akshay</h1>");   
})

server.listen(5000)

