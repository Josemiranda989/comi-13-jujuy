const mainControllers = {
    home: (req, res) => {
        res.send('Bienvenidos a mi app!')
    },
    contact: (req, res) => {
        res.send('Comunicate con nosotros!')
    }
}

module.exports = mainControllers