 const express = require("express")

const {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvent,
    getOneEvent,
} = require("../controllers/event")

const api = express.Router()

api.get('/', getEvent)
api.get('/:id', getOneEvent)
api.post('/create', createEvent)
api.put('/:id', updateEvent)
api.delete('/:id', deleteEvent)



module.exports = api