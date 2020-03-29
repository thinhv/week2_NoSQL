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

module.exports = {
    cat_list_get,
    cat_get
}
