const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    eventTitle: {
    type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    comments: [{
        amount: {
            type: Number,
        },
        date: {
            type: Date.now,
        },
        payMethod: [{
            type: String,
            paymentId: {
                type: String
            }, // Paypal oder Metamask Wallet address
        }],
        donatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
        
    }]
});

module.exports = mongoose.model("Donation", DonationSchema);