const eventRouter = require('express').Router()
const Event = require('../models/event')
const verify = require('../middleware/verify')

eventRouter.post('/create', (req, res) => {
    Event 
        .create(req.body)
        .then(post => res.json(post))
        .catch(err => console.log(err))
})

// eventRouter.delete('/:id', verify, (req, res) => {
//     Event    
//         .deleteOne({ _id: req.params.id })
//         .then(() => res.json('Event has been deleted'))
//         .catch(err => console.log(err))
// })

eventRouter.put('/:id', async (req, res) => {
    await Event.findOne({ _id: req.params.id })
    await Event.updateOne({ $set: req.body })
        .then(newPost => res.json('Your event has been updated'))
        .catch(err => console.log(err))
})

eventRouter.get('/:id', (req, res) => {
        Event
            .findOne({ _id: req.params.id })
        // .populate('userId')
            .then(post => res.json(post))
            .catch(err => console.log(err))
})



// eventRouter.get('/', async (req,res) => {
//     try{
//         res.json(req.event)
//     }
//     catch(err){
//         res.json(err)
//     }
// })

module.exports = eventRouter