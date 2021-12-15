// const express = require('express');
const fs = require('fs');
// const PORT = 5000;

// const app =express();




fs.readFile('./hello.txt','utf-8',(err,data)=>{
    console.log(data);
})

// app.listen(PORT,()=>{
//     console.log(`server running at port ${PORT}`);
// })