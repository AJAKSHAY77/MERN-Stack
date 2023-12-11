// // import express from "express"

// const express = require("express")

// const server = express();
// const port = 4000

// console.log("akshay jain");
// console.log("aditya jain");

// console.log("jai hind");

// server.listen(port)

const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = fs.readFileSync("data.json", "utf-8");

const server = http.createServer((req, res) => {
  console.log("sever started");

  if(req.url.startsWith("/")){
      res.setHeader("content-type", "application/json");
     
    res.end(index);
  }
   if(req.url.startsWith("/demo")) {
    res.setHeader("content-type", "text/html");
    res.end(data);
  } 
});

server.listen(5000);
