const express = require('express')
const mainRoutes = require('./routes/mainRoutes')
const booksRoutes = require('./routes/booksRoutes')

const app = express()
const port = 3000

app.use('/', mainRoutes)
app.use('/books', booksRoutes)
// app.use('/users', usersRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})