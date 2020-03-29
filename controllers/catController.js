'use strict';
const cat = require('../models/catModel')

const cat_list_get = (async (req, res) => {
    const { weight, age, gender } = req.query
    return res.json(await cat.find().byHeavierThan(weight).byGender(gender))
})

const cat_get = (async (req, res) => {
    return res.json(await cat.findById(res.params.id))
})

const cat_create = (async (req, res) => {    
    const { name, gender, age, weight, color } = req.body
    try {
        const createdCat = await cat.create({
            name,
            gender,
            age,
            weight,
            color
        })
        return res.status(201).json(createdCat)
    } catch (err) {
        return res.status(400).json(err)
    }
    
})

module.exports = {
    cat_list_get,
    cat_get,
    cat_create
}
