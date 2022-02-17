const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended : false
})
)
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const event = require('./API/event')

mongoose.connect(process.env.MONGO_DB)

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/event', event)

app.get('/', (req, res) => {
    res.send('Welcome to Charoo!')
})


app.listen(PORT, console.log(`SERVER IS LISTÄNING ON ${PORT}`))