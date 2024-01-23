const path = require('path')

const usersControllers = {
    register: (req, res) => {
        res.render('register.ejs', {
            title: 'Crea tu cuenta'
        })
    },
    login: (req, res) => {
        res.render('login.ejs', {
            title: 'Inicia sesión'
        })
    }
}

module.exports = usersControllers