import express from 'express';
import { users } from './user.js';
const app = express();
const PORT = 4000;


app.get('/',(req,res)=>{
    res.send('welcome to home page');
})

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