const express = require('express')
const router = express.Router()

const indexController = require('../controllers/index.controllers')

router.get('/', indexController.artistas)
router.get('/multi', indexController.multiPromesa)
router.get('/clientes/:numerito', indexController.clientes)

module.exports = router