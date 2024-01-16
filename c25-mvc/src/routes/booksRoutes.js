const express = require('express')
const router = express.Router()

const booksControllers = require('../controllers/booksControllers')

router.get('/list', booksControllers.list)

router.get('/detail/:id/:name?', booksControllers.detail)

module.exports = router