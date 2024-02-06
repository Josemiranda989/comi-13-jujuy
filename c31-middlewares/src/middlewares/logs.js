const fs = require('fs')
const path = require('path')

module.exports = function (req, res, next) {
    // Documentar las rutas por donde paso el usuario
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let url = req.url

    let msg = ` - El usuario ingreso a la ruta ${url}, a la hora ${hours}:${minutes}hs
`

    let pathLogs = path.join(__dirname, '../data/logs.txt')

    fs.appendFileSync(pathLogs, msg)

    next()
}