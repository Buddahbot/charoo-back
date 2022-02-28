const  { donation } = require('../models/donation');
const Donation = require('../models/donation');

const getDonation = async (req, res) => {
    try {
        const donation = await Donation.find().populate('event')
        res.json({
            data: donation,
            msg: "Show all donations by user"
        })
    } catch (err) {
        console.log(err)
    }
}

const getOneDonation = async (req, res) => {
    try {
        const { id } = req.params
        const donation = await Donation.findById(id).populate('event')
        res.json({
            data: donation
        })
    } catch (err) {
            console.log(err)
        }   
}

const createDonation = async (req, res) => {
        try {
            const donation = await Donation.create(req.body).populate('event').populate('user')
            res.json({
            msg: "Successfully donated",
            success: true,
            data: donation,
            });
        } catch (err) {
            console.log(err);
            res.json({
            success: false,
            data: err,
            });
        }
};

module.exports = {
    getDonation,
    getOneDonation,
    createDonation,
}