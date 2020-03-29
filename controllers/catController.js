'use strict';
const catModel = require('../models/catModel')
const cats = catModel.cats;

const cat_list_get = (req, res) => {
    res.json(cats)
}

const cat_get = (req, res) => {
    res.json(cats.filter((cat) => {
        const { id } = req.params.id
        return cat.id === id
    }))
}

const cat_create = (req, res) => {
    const { name, age, weight, owner } = req.body
    console.log(`Name ${name}`)
    console.log(`Name ${age}`)
    console.log(`Name ${weight}`)
    console.log(`Name ${owner}`)
    res.status(201).end()
}

module.exports = {
    cat_list_get,
    cat_get,
    cat_create
}
