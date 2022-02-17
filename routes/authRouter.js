const express = require('express')
const authRouter = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

authRouter.post('/register', async (req, res) => {
    const emailExist = await User.findOne({ email : req.body.email })
    if (emailExist) return res.status(400).send('E-Mail already exist')

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    
    const user = new User({
        firstName: req.body.firstName,
        lastName : req.body.lastName,
        email: req.body.email,
        password: hashPassword,
    })
    user.save()
    res.send(`welcome to Charoo! ${user.firstName}`)
})

authRouter.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Email not found, please sign up')

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass)
        return res.status(400).send('Password is not valid!')
    
    const token = jwt.sign({user: user}, process.env.SECRET)
    res.header('auth-token', token)
    res.json(token)
    
})


module.exports = authRouter