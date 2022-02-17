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
        required: true
    },
    distance: {
        type: Number,
        required: true,
    },
    // start: {
    //     type: Date,
    //     required: true,
    // },
    country: {
        type: String,
        required: true,
    },
    monetaryGoal: {
        type: Number,
        required: true,
    },
    eventTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    media: {
        data: Buffer,
        contentType: String
    },
    charity: {
        type: String,
        required: true,
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