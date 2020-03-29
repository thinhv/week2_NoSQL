'use strict';
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const bodyParser = require('body-parser')

router.post('/login', bodyParser.urlencoded({extended : false}), authController.login);

module.exports = router;