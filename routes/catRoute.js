'use strict';
const express = require('express')
const router = express.Router()
const catController = require('../controllers/catController')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })

router.get('/:id', catController.cat_get)

router.get('/', catController.cat_list_get)

router.post('/', upload.single('cat'),  catController.cat_create)

router.put('/', (req, res) => {
    res.send('With this endpoint you can edit cats.')
})

router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete cats.')
})

module.exports = router