'use strict';
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const bodyParser = require('body-parser')

router.get('/', userController.user_list_get)

router.get('/:id', userController.user_get)

router.post('/', bodyParser.urlencoded({ extended: false }), userController.user_create)

module.exports = router