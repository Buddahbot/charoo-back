const express = require("express")

const {
    getDonation,
    getOneDonation,
    createDonation,
} = require("../controllers/donation")

const api = express.Router()

api.get('/', getDonation)
api.get('/:id', getOneDonation)
api.post('/create', createDonation)

module.exports = api 