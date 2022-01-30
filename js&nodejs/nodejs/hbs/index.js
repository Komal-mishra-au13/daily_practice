const express = require('express');
const PORT = 4000;
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const app = express();

//setup view engine/templateengine - handlebar
app.set('view engine','hbs');

// set up body parser template engine for getting data in "req"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.json(
        {
            message:"Hello there!"

        }
    );
});

app.get('/home',(req,res)=>{
    const homePath =path.join(__dirname,'home.hbs');
    res.render(homePath);
})

app.get('/signup',(req,res)=>{
    const homePathSign =path.join(__dirname,'signup.hbs');
    const data ={
        title:"Signup", // to pass data in {{title}}
        name:" ",
        email:" ",        // to give bydefault value
        password:" "
    }
             
    res.render(homePathSign,data);
})
// after 29 to 35 line this get request cannot send the data to server . 
// we need to define post method to send signup data to server

app.post('/signup',(req,res)=>{
  console.log(req.body)
  const homePathSign =path.join(__dirname,'signup.hbs');
    const data ={
        title:"Signup"      // to pass data in {{title}}
    }
    res.render(homePathSign,data);
});


//connecting to server 
app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
})