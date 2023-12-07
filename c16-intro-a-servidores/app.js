const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.join(__dirname, '/public')
app.use(express.static(publicPath))

// escucha / y responde el envio de un html
app.get('/', (req, res)=>{
    // guardar la ruta del html
    let homePath = path.join(__dirname, 'views', 'home.html')
    // enviar un archivo html
    res.sendFile(homePath)
})

app.get('/milanesa', (req, res)=>{
    let plato = 'Sandwich de milanesa'
    res.json(plato)
})

// ruta que responda a /consola
app.get('/consola', (req, res)=>{
    let mensaje = 'Hola estoy en la ruta consola 🙌🚀😎'
    // que me muestre un console.log
    console.log(mensaje);
    // que me de un mensaje por el navegador
    res.send(mensaje)
})



const port = 4000
app.listen(port, ()=>{
    console.log(`El servidor esta corriendo en http://localhost:${port} 🚀🚀🚀`);
    // console.log("El servidor esta corriendo en http://localhost:"+ port);
})

