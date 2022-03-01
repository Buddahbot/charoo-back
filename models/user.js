const mongoose = require("mongoose")

const Schema = mongoose.Schema 

const User = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email',
        ],
    },
    password: {
        type: String, 
        required: true, 
        minlength: 8
    },
    metric: {
        type: Boolean,
        default: true
    },
    notifications: {
        type: Boolean,
        default: true,
        
    },
    regDate: {
        type: Date, 
    }, 

})

module.exports = mongoose.model('User', User)