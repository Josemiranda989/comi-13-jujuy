const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')

app.use(express.static('public'));

// Config de Motor de vistas o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

const mainRoutes = require('./routes/main.routes.js')
const usersRoutes = require('./routes/users.routes.js')
app.use('/', mainRoutes)
app.use('/users', usersRoutes)


app.listen(port, () => console.log(`Servidor Ok - http://localhost:${port}`));
