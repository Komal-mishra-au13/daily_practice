// A client send http request to the web .
// node.js is runtime environment for javascript to run javascript on server machine.
// To create a http server
// express is a node.js framework . 

const  express = require('express');
const fs = require('fs');
const app = express(); 
const PORT = 4000;
// console.log(app);

app.get('/',(req,res)=>{
    console.log("welcome ");
    res.send("hello world ");  // to send any data to the website 
})

fs.writeFile('./hello.txt',"hello",(error,data)=>{
    console.log(data); 
})

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})


// GET , POST , PUT , DELETE 

// 1. get - when we make a request without sending any data to the server . 
// 2. post - when we sending some data to the server 
//3. put - when we update the existing data . If there is no data then it will create a new data in server.
//4. delete - when we wnt to delete any data in server . 
// 5. patch - it will jsut update the exsisting data. 



// Fs module - file system - it is a node express module . 

