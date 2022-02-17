const express = require('express');
const userRouter = express.Router();
const verify = require('../middleware/verify')

userRouter.get('/', verify, async (req, res) => {
    try {
        res.json(req.user)
    } catch (err) {
        res.json(err)
    }
})

module.exports = userRouter 