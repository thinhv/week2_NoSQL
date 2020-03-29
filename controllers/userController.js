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

const user_create = (req, res) => {
    const { name, email, passwd } = req.body
    console.log(`Name: ${name}`)
    console.log(`Email: ${name}`)
    console.log(`Password: ${name}`)

    res.status(201).end()
}

module.exports = {
    user_list_get,
    user_get,
    user_create
}