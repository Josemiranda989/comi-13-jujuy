const express = require('express');
const router = express.Router()
const usersControllers = require('../controllers/usersControllers')

router.get('/', (req, res) => res.send('Entraste al apartado de usuarios'))

router.get('/register', usersControllers.register)

router.get('/login', usersControllers.login)



module.exports = router;


