// To download nodemon globally - 
//npm install -g nodemon

// Express js 
// To create server in express -- 
const Path = require("path");
const express = require("express");
const app = express();
const PORT = 5000;

//To create Router
app.get("/",function(req,res){
    res.sendFile(Path.join(__dirname,"demo.html"));
})

// another Router 
app.get("/home",function(req,res){
    res.sendFile(Path.join(__dirname,"home.html"))
})

//To create server 
app.listen(PORT,function(){
    console.log("server is running");
})

