const express = require("express")

const {
    getUser,
    updateUser,
    getOneUser,
    deleteUser,
} = require("../controllers/user")

const api = express.Router()

api.get('/', getUser)
api.get('/:id', getOneUser)
api.put('/:id', updateUser)
api.delete('/:id', deleteUser)


module.exports = api 