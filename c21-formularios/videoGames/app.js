// Requires
const express = require('express');
const path = require('path')

const app = express();
const port = 3005


// Config
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'create-product.html'))
})

app.listen(port, () => {
    console.log(`Nuesta app corre en http://localhost:${port}`);
})
