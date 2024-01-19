const path = require('path')

const productList = [
    {
        id: 1,
        nombre: 'Gatito',
        descuento: 25,
        precio: 1500,
        img: 'img-cafetera-moulinex.jpg'
    },
    {
        id: 2,
        nombre: 'Patito',
        descuento: 5,
        precio: 500,
        img: 'img-cafetera-moulinex.jpg'
    }
]


const mainController = {
    home: function (req, res) {

        res.render('home.ejs', {
            title: 'Bienvenidos a MeLi',
            productList: productList,
            admin: true
        });
    }
}

module.exports = mainController