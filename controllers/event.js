const { events } = require('../models/event')
const Event = require('../models/event')

const getEvent = async (req, res) => {
    try {
        const event = await Event.find().populate('user').sort({dateCreated : -1 })
        res.json({
            data: event,
            msg: "show all Events",
        })
    } catch (err) {
        console.log(err)
    }
}

const getOneEvent = async (req, res) => {      
    try {
        const { id } = req.params
        const event = await Event.findById(id).populate('user')
        res.json({
            data: event,
        })
    } catch (err) {
        console.log(err)
    }
}

const createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body)
        res.json({
        msg: "Created Event",
        success: true,
        data: event,
        });
    } catch (err) {
        console.log(err);
        res.json({
        success: false,
        data: err,
        });
    }
};

const updateEvent = async (req, res) => {
    try {
        const { id } = req.params
        const { sportstype, // kann man auch aus body auslesen, wie oben.
                distance,
                start,
                country,
                monetaryGoal,
                eventTitle,
                description,
                imageUrl,
                charity,
                dateCreated } = req.body
        
        const event = await Event.findByIdAndUpdate(
            id,
            {
                sportstype,
                distance,   //req.body als argument/parameter einsetzen
                start,
                country,
                monetaryGoal,
                eventTitle,
                description,
                imageUrl,
                charity,
                dateCreated,
            },
            { new: true}
        )
        res.json({
            msg: `Event ${event.eventTitle} has been updated`,
            success: true,
            data: event,
        })
    } catch (err) {
        console.log(err)
    }
}

const deleteEvent = async (req, res) => {      
    try {
        const { id } = req.params
        const event = await Event.findByIdAndDelete(id)
        res.json({
            msg: `Event ${event.eventTitle} has been deleted`,
            data: event,
        })
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getEvent,
    getOneEvent,
    createEvent,
    updateEvent,
    deleteEvent,
}
