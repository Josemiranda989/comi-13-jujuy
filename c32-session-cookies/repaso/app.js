const express = require('express')
const app = express()

const session = require('express-session')
const cookieParser = require('cookie-parser')
const countPlus = require('./middleware/countPlus')
const fs = require('fs')
const port = 3000

// Middlewares
app.use(session({
    secret: "Se viene el carvanal",
    resave: false,
    saveUninitialized: true
}))
app.use(cookieParser())

app.get('/', (req, res) => {
    req.session.count = 0
    console.log(req.session.count);
    fs.writeFileSync('./database.json', '"[]"')

    res.send(`El contador es igual a ${req.session.count}`)
})

app.get('/count', (req, res) => {
    console.log(req.session.count)
    console.log(req.session.count++)

    res.send(`El valor es: ${req.session.count}`)
})

app.listen(port, () => {
    console.log(`Funciona en  http://localhost:${port}`)
})