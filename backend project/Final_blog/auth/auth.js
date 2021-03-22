const jwt = require('jsonwebtoken');
const config = require('../config/config');
const path = require('path')
const layout = path.join('layouts', "index");
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// const { userRoutes, loggedUsers } = require('../routes/user');
const auth = function (req, res, next) {

    // if (!req.cookies['token'] || req.cookies['token'] == "") {
    //     data = { msg: "Please login to access profile page!" }
    //     return res.render('login', { data, layout });
    // }
    if (!req.cookies['token'] ) {
        data = { msg: "Please login to access the profile page!" }
        return res.render('login', { data, layout });
    }

    else if (req.cookies['token']) {
        const decoded = jwt.verify(req.cookies['token'], config.secret);
        // console.log(decoded);
        req.user = decoded;
        console.log("DECODED FROM AUTH:",decoded)
        // console.log("loggedUsers from AUTH", loggedUsers);
 

    }
    next();

};

const authRole = async function (req, res, next) {

    try {
        if (req.body.admin === 'on') {

            const user = await User.findOne({ email: req.body.email });
            console.log(user)
            isMatch = bcrypt.compareSync(req.body.password, user.password);

            if (user && user.role === "admin" && isMatch) {
                
                // data = { msg: "Logged in as admin" }
                res.cookie('admin', user.id, {maxAge: 600000});
                console.log("FROM AUTH ROLE:: COOKIE: ",req.cookies)
                const token = await jwt.sign(user.id, config.secret);
                res.cookie('token', token, { maxAge: 600000 });
                console.log("FROM AUTH ROLE:: COOKIE: ",req.cookies)
                return res.redirect(`/auth/admin/${token}`);
            }
                return res.status(401).send(`<center><h1 style = "color: Red;">You are NOT AUTHORISED to view this page!</h1></center>`)

            
        } else {
            
            next()
        }
    } catch (error) {
        if (error) console.log("Error from auth: ",error)
    }
}

module.exports = { auth, authRole };