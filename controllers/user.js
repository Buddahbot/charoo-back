const User = require("../models/user");                

const getUser = async (req, res, next) => {        
    try {
        const user = await User.find()
        res.json({
            data: user,
            msg: "show all Users",
        })
    } catch (err) {
        console.log(err)
    }
}

const getOneUser = async (req, res, next) => {      
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.json({
            data: user,
        })
    } catch (err) {
        console.log(err)
    }
}

const updateUser = async (req, res) => {            
    try {
        const { id } = req.params
        const { firstName, lastName, email } = req.body

        const user = await User.findByIdAndUpdate(
            id,
            {
                firstName,
                lastName,
                email,
            },
            { new: true }
        )
        res.json({
            msg: `User with id ${user.id} updated`,
            success: true,
            data: user,
        })
    } catch (err) {
        console.log(err)
    }
}

const deleteUser = async (req, res) => {      
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        res.json({
            msg: `User has been deleted`,
            data: user,
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {                          
    getUser,
    updateUser,
    getOneUser,
    deleteUser
}