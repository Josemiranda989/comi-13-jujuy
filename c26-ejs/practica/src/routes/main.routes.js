const express = require('express');
const router = express.Router()

const mainController = require('../controllers/mainControllers')

router.get('/', mainController.home)

module.exports = router;


