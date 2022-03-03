const mongoose = require('mongoose')
const Schema = mongoose.Schema
// import User from "./user";

const Event = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    sportstype: {
        type: String,
    
    },
    distance: {
        type: Number,
    
    },
    country: {
        type: String,
    
    },
    monetaryGoal: {
        type: Number,
    
    },
    eventTitle: {
        type: String,
    
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    charity: {
        type: String,
    
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    privat: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Event', Event)