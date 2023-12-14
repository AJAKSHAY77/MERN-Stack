
import fs from "fs"
import express from"express"



const data = JSON.parse(fs.readFileSync("data.json", "utf-8"))
const products = data.products;

const server = express()
//built in middleware which read only body of req in json format
//body parcer
server.use(express.json())

// server.use(urlencoded())
server.use(express.static("public"))

// logger midleware

const auth = (req, res, next) => {
  console.log(
    req.params,
    req.ip,
    req.hostname,
    req.get("user-content"),
    new Date()
  );
  next();
};

const auth2 = (req,res,next) => {
    // console.log(req.query);
    
    if (req.body.password=="123") {
        next()
    }
    else {
        res.send(401)
    }
}

// application middleware !

// server.use(auth);
// server.use(auth2)


// making apis or paths ! 


server.get("/demo",auth,(req, res) => {
    
    res.send("<h1>jai hind</h1>")

    // res.send(products)

    // res.sendStatus(202).send("hello")

    // res.send("hello")
})


server.post("/", auth2, (req, res) => {
    
    res.send("success")
})




server.listen(5000, () => {
    console.log("server started");
})

