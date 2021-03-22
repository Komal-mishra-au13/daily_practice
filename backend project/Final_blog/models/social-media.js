const mongoose = require('mongoose');

const socialmedia = mongoose.Schema({
    website:{
        type: String,
        default: "http://www.your-website.com"
    },
    github: {
        type: String,
        default: "www.github.com/github-account"
    },
    twitter: {
        type: String,
        default: "www.twitter.com/twitter-handle"
    },
    instagram: {
        type: String,
        default: "www.instagram.com/instagramID"
    },
    facebook: {
        type: String,
        default: "www.facebook.com/facebook-account"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reg_user",
        defualt:null
    }
});

module.exports = mongoose.model('socialmedia', socialmedia);