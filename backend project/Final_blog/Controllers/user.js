const express = require('express');
const router = express.Router();
const path = require("path");
const config = require('../config/config');
const User = require('../models/user');
const Profile = require('../models/profile_info');
const bcrypt = require('bcryptjs');
const { auth, authRole } = require('../auth/auth');
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const { userInfo } = require('os');
const { request } = require('http');
const loggedUsers = {};
const logs = [];
const layout = path.join('layouts', 'index');
const multer = require('multer');
const Blog = require('../models/blog');
const socialMedia = require('../models/social-media');


// -- setting up Storage for mukter -- //
const Storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
});

// -- Init file upload -- //

let upload = multer({
    storage: Storage,
}).single('dp');


// -------------------User SIGNUP Page- GET------------------ //
router.get('/signup', (req, res) => {

    res.render('signup', { title: "Signup", layout });

});

// -------------------User SIGNUP Page- POST------------------ //
router.post('/signup',

    [
        check('firstName', 'Please enter the first name.').not().isEmpty(),
        check('email', 'Please enter email').isEmail(),
        check('password', 'Please enter the password.').isLength({ min: 6 }) 
    ],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render('signup', {
                data: {},
                errors: errors.array(),
                message: 'Unable to create user!'
            });
        };

        try {

            let user = await User.findOne({ email: req.body.email });

            if (user) {
                data = {
                    title: "Signup",
                    layout,
                    error: "Email already registered! Please Login..."
                };
                res.render('signup', data);
            };

            user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                role: req.body.role
            });

            user.password = bcrypt.hashSync(req.body.password, 9);

            await user.save();

            res.redirect('/auth/login');

        } catch (error) {
            console.log(error.message);
            res.status(500).render('signup', { title: "Signup", layout, err: "Error while Registering the account" });
        };
    });

// -----------------User/Admin LOGIN Page - GET------------------- //
router.get('/login', async(req, res) => {

try {
    if (req.cookies.token) {

        console.log("LOGIN_GET cookies available", req.cookies);
        console.log("LOGIN_GET loggedUsers: ", loggedUsers);

        if (loggedUsers[jwt.verify(req.cookies['token'], config.secret)] == true) {
            res.redirect('/auth/user');

        } else {
            res.render('login', { msg: "Logged out", title: "Login", layout });
        };

    } else {
        console.log('LOGIN_GET: No cookies', req.cookies);
        res.render('login', { title: "Login", layout });
    };
} catch (error) {
    if (error) {
        console.log(error.message);
        res.redirect('/auth/login');
    };
};

});

// -----------------User/Admin LOGIN Page - POST------------------- //

router.post('/login',
    [
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Please enter a valid password').isLength({ min: 6 })  // have to make room for errors in hbs
    ],
    authRole,
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors.array());

            return res.status(400).render('login', {
                layout,
                title: "Err Login",
                error: errors.array()[0].msg,
                message: 'Unable to create user!'
            });
        };

        try {

            let user = await User.findOne({ email: req.body.email });

            if (!user) {
                return res.render('login', { title: "Login", layout, data:{msg: "User not found! Please Signup first"} });
            }
            if (!user.isActive){
                return res.render('login', {title: "Deactivated user", layout, error: "You account is temporarily suspended!"}); 
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);

            if (!isMatch) {
                return res.render('login', { title: "Login", layout, error:"You've entered Incorrect password" });
            };


            const token = await jwt.sign(user.id, config.secret);
            console.log("Login POST(token): ",token);
            // storing token in cookie
            res.cookie('token', token, { maxAge: 600000 });

            loggedUsers[user._id] = true;
            logs.push({id:user._id, name:user.firstName, email:req.body.email});
            console.log("Logged users (LOGIN_POST): ", loggedUsers);

            res.redirect('/auth/user');

        } catch (error) {
            console.log(error.message);
            res.render('login', { title: 'Login', layout, message: "Error while Login..." });
        };

    });

// -----------------ADMIN Profile Page - GET------------------- //

router.get('/admin/:id', async(req, res) => {
try {
    // const decoded = jwt.verify(req.cookies['token'], config.secret);
    const decoded = jwt.verify(req.params.id, config.secret);
    const allUsers = await User.find();
    // console.log(allUsers);
    const allBlogs = await Blog.find().populate('userId');
    // console.log(allBlogs[1]);
    const user = await Profile.findOne({userId:decoded}).populate('userId');
    console.log("Admins's Info: ", user);
    // const loggedusers = Object.entries(loggedUsers);
    // console.log(loggedusers);
    const lUsers = allUsers.map(item => {
        if (item._id in loggedUsers && loggedUsers[item._id]==true) {
            return {name:item.firstName, email:item.email};
        }
    }).filter(item => {
        if (item) {
            return item;
        };
    });
    console.log(lUsers);
    res.render('admin', { title: "Admin", layout, user, allUsers, allBlogs, id:req.params.id , lUsers});

} catch (error) {
    if (error){
        console.log(error.message);
        return res.status(401).send(`<center><h1 style = "color: Red;">You are NOT AUTHORISED to view this page!</h1></center>`);
    };
};
});

// -----------------User PROFILE/USER Page - GET------------------- //
router.get('/user', auth, async (req, res) => {
    try {
        const blogs = await Blog.find({userId:req.user}).sort({_id:-1});
        const user = await User.findById({ _id: req.user });
        res.render('user', { title: `${user.firstName}'s profile`, layout, user, blogs });

    } catch (error) {
        console.log(error.message);
        res.render('login', { title: 'Login', layout, msg: "Error while Login...", blogs });
    };
});

// -----------------User PROFILE Page - GET------------------- //
router.get('/user/profile', auth, async (req, res) => {
    console.log("Cookies froM PROFILE-GET: ",req.cookies);
    console.log("loggedUsers from PROFILE-GET: ", loggedUsers);
    try {
        const info = await Profile.findOne({ userId: req.user });
        const user = await User.findById({ _id: req.user });
        const socialmedia = await socialMedia.findOne({userId:req.user});
        const blogs = await Blog.find({userId:req.user}).sort({_id:-1});
        res.render('profile1', { title: `${user.firstName}'s profile`, layout, info, user, sm:socialmedia, blogs });

    } catch (error) {
        console.log("Error from user/profile",error.message);
        res.render('login', { title: 'Login', layout, error: "Error Accessing profile..." });
    };
});

// ---------------- User PROFILE for Reader Access --------------- //
router.get('/author/profile/:id', async (req, res) => {

    try {
        const info = await Profile.findOne({ userId: req.params.id });
        const socialmedia = await socialMedia.findOne({userId:req.params.id});
        const blogs = await Blog.find({userId:req.params.id}).populate('userId').sort({_id:-1});
        const user = await User.findById({ _id: req.params.id });
        res.render('profile', { title: `${user.firstName}'s profile`, layout, info, user, sm:socialmedia, blogs});

    } catch (error) {
        console.log(error.message);
        res.render('login', { title: 'Login', layout, error: "Error while Login..." });
    };
});

// ---------------User Profile UPDATE Page - GET----------------- //

router.get('/user/update/:id', auth, async (req, res) => {
    const user = await User.findById({ _id: req.user });
    const info = await Profile.findOne({ userId: req.user });
    res.render('updprofile', { layout, title: "Update info", user, info });
});

// ---------------User Profile UPDATE Page - POST/PUT----------------- //
router.post('/user/update/:id', auth, upload, async (req, res) => {
    const user = await User.findById({ _id: req.params.id });
    let info = await Profile.findOne({ userId: req.params.id });
    console.log(user);
 try {
    if (!info) {
        info = new Profile({

            contact: req.body.contact,
            about: req.body.about,
            address: {
                street: req.body.street,
                state: req.body.state,
                city: req.body.city,
                zip: req.body.zip
            },
            image: req.file.filename,
            facebook: req.body.facebook,
            userId: user._id


        });
        await info.save();
    } else {

        info = await Profile.findOneAndUpdate({ userId: user._id }, {
            "$set": {

                contact: req.body.contact,
                about: req.body.about,
                address: {
                    street: req.body.street,
                    state: req.body.state,
                    city: req.body.city,
                    zip: req.body.zip
                },
                image: req.file.filename,  
                facebook: req.body.facebook,
                userId: user._id


            }
        });
    };

    res.redirect('/auth/user/profile');
 } catch (error) {
     if (error) {
        console.log(error.message)
        throw error
     };
 };

});

// ---------------User LOGOUT page - GET----------------- //

router.get('/logout',auth, async (req, res) => {

    loggedUsers[jwt.verify(req.cookies['token'], config.secret)] = false;
    loggedUsers[req.user] == false;
    await res.clearCookie('token');

    res.redirect('/auth/login');
    console.log("Cookies after LOGOUT: ",req.cookies);
    console.log("LoggedUser after Logout: ",loggedUsers); // to check if the id is set to false or not

});


// ---------------User PASSWROD RESET page - GET----------------- //
router.get('/user/profile/pwdreset',auth, (req, res)=> {
    res.render('pwdreset', {layout, title:"Reset Password"});
});

// ---------------User PASSWROD RESET page - POST/PUT----------------- //
router.post('/user/profile/pwdreset',auth, async(req, res)=> {

    try {
        const user = await User.findById({_id: req.user});
        const isMatch = await bcrypt.compare(req.body.oldpwd, user.password);
        if (!isMatch){
            return res.render('pwdreset', {title:"Invalid password", layout, data:{msg:"Invalid password! Please enter the correct password..."}});
        } else {
            console.log(req.body.oldpwd, "is a match!");
            console.log(req.body);
            if (req.body.newpwd === req.body.renewpwd){
                await User.findOneAndUpdate({_id:req.user},{
                    '$set': {
                        password: bcrypt.hashSync(req.body.newpwd, 10)
                    }
                });
                res.render('login', {layout, title: `${user.firstName} Re-login`, data: {msg:`Password changed successfully, please re-login with the NEW PASSWORD...`}});

            } else{
                console.log('New passwords did not match!');
                return res.render('pwdreset', {title:"Reset password", layout, data: {msg:"Re-enter the password, didn't match!"}});
            };
        };
        
    } catch (error) {
        if(error) {
            console.log(`ERROR: `,error.message);
            res.redirect('/user/profile/pwdreset');
            // throw error;
        } ;// add render route
        
    };
})

//------------------------- ACTIVATE / DEACTIVATE USER -------------------------- //
router.post('/admin/status-change/:id', async(req, res)=> {
    try {
        let user = await User.findById({_id:req.params.id});
        console.log(user);
        if (user.isActive){

            await User.findByIdAndUpdate({_id:req.params.id}, {
                "$set": {isActive: false}});
        } else {
            await User.findByIdAndUpdate({_id:req.params.id}, {
                "$set": {isActive: true}});
        };
        user = await User.findById({_id:req.params.id});
        console.log(user);
        console.log("Token from status-change",req.cookies);
        res.redirect(`/auth/admin/`+req.cookies['token']);
    } catch (error) {
        console.log("Error from Status-change:",error.message);
        throw error;
    };
});

router.post('/profile/social-media',auth, async(req, res)=> {
    try {
        const socialmedia = new socialMedia({
            website: req.body.website,
            github:req.body.github,
            twitter:req.body.twitter,
            instagram:req.body.instagram,
            facebook:req.body.facebook,
            userId: req.user
        });

        await socialmedia.save();
        res.redirect('/auth/user/profile');

    } catch (error) {
        console.log("Error from update user: ",error.message);
        res.redirect('/auth/user/profile');
    };
});


userRoutes = router;

module.exports = { userRoutes, loggedUsers };