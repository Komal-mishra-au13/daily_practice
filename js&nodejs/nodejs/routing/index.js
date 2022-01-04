import express from 'express';
import { users } from './user.js';
import path from 'path';
const __dirname = path.resolve();  // to resolve the __dirname error
const app = express();
const PORT = 4000;

// for static file 
app.use(express.static(path.join(__dirname,'assets')));

app.get('/',(req,res)=>{
    res.send("Hello dear")
});

app.get('/home',(req,res )=> {
    const homeFilepath = path.join(__dirname,'home.html')
    // console.log(homeFilepath);   it print the whole path of file in console
    res.sendFile(homeFilepath);
});

app.post('/msg',(req,res)=>{
    res.json({
        message:'Hello world'
    })
});

app.get('/users',(req,res)=>{
    res.json(users);
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})