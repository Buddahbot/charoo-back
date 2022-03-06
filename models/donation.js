const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    eventTitle: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    },
        // payMethod: [{
        //     type: String,
        //     paymentId: {
        //         type: String
        //     }, // Paypal oder Metamask Wallet address
        // }],
    donatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: { // privat donation yes  or no
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model("Donation", DonationSchema);