const mongoose = require('mongoose');

const profileInfo = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reg_user",
        default: null
    },
    about: {
        type: String,
        default: "Tell us about yourself..."
    },
    
        
    address: {
        street: String,
        state: String,
        city: String,
        zip: String,
    
    },
    contact: {
        type: Number,

    },
    facebook: {
        type: String,
        default: "None"
    },

    image: String

});

module.exports = mongoose.model('profile', profileInfo);