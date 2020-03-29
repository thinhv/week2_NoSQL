'use strict';
const userModel = require('../models/userModel')

const user_list_get = (req, res) => {
    res.json(userModel.users)
}

const user_get = (req, res) => {
    res.json(userModel.users.filter((user) => {
        const { id } = req.params
        return user.id === id
    }))
}

module.exports = {
    user_list_get,
    user_get,
}