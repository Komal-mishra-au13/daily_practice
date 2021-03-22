const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { userRoutes, loggedUsers } = require('./Controllers/user');
const blogRoutes = require('./Controllers/blogs');
const MongoInit = require('./config/mongodb');
const layout = path.join('layouts', "index");
const cookie = require('cookie-parser');
const PORT = process.env.PORT || 5100;
const hbs = require('hbs');
// const User = require('./models/user');
const Blog = require('./models/blog');
// const partialPath = path.join(__dirname, '../views/partials');
const multer = require('multer');
const methodOverride = require('method-override');

// Connecting to MongoDB database
MongoInit();

// Starting express app
const app = express();
// cookie-parser
app.use(cookie());
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Method override
app.use(methodOverride('_method'));

// Routers
app.use('/auth', userRoutes);
app.use('/', blogRoutes);

// setting path for static files
app.use(express.static(path.join(__dirname, 'public')));

// Setting up view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
// To convert date to proper format
hbs.registerHelper('dateLocal', function(date) {
    return date.toLocaleDateString();
 });

// For flash message
app.all('/express-flash', (req, res )=> {
  req.flash('success', 'This is a flash message using the express-flash module.');
  res.redirect(301, '/');
})

// ---------- Setting storage engine ----------- //
const Storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
});

// ---------Init file upload------- //

let upload = multer({
    storage: Storage,
}).single('dp');

// ---------------------- HOME GET Route -------------------  //

app.get('/', async (req, res) => {

    try {
        const blogs = await Blog.find().populate('userId').sort({ _id: -1 });
        // console.log(blogs);
        console.log("HOME-loggedUsers", loggedUsers);
        res.render('home', { title: " BlogginBow home", layout, blogs });

    } catch (error) {
        if (error) {
            console.log(error.message);
            throw error;
        };
    };
});

// ---------------------- HOME POST Route -------------------  //
app.post('/', async(req, res)=> {

    try {
        // const blogs = await Blog.find().populate('userId').sort({ _id: -1 });
        const filteredblogs = await Blog.find({genre:req.body.search}).populate('userId').sort({ _id: -1 });
        // console.log(filteredblogs);
        res.render('home', {layout, title:"Bloggingbow Home", blogs:filteredblogs, msg: `<<< Blogs in "${req.body.search}" category >>>`});
    } catch (error) {
        if (error) {
            console.log(error.message);
            throw error;
        };
    };
});

// ------------- About us Page --------------//
app.get('/about-us', (req, res)=> {
    res.render('about', {title:"About Us", layout})
})

// -------------Listening to Port-----------//
app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`);
})

