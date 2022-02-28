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
const user = require('./API/User')
const event = require('./API/event')
const donation = require('./API/donation') //importiert von API ordner

mongoose.connect(process.env.MONGO_DB)

app.use('/auth', authRouter)
app.use('/user', user)
app.use('/event', event)
app.use('/donation', donation) //entry routes fuer donations API ordner



app.get('/', (req, res) => {
    res.send('Welcome to Charoo!')
})


app.listen(PORT, console.log(`SERVER IS LISTÄNING ON ${PORT}`))