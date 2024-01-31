const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const visited = products.filter(product => product.category == 'visited')
		const inSale = products.filter(product => product.category == 'in-sale')

		res.render('index.ejs', { visited, inSale, toThousand })
	},
	search: (req, res) => {
		// Obtener informacion del formulario req.QUERY (GET)
		let keywords = req.query.keywords.toUpperCase()

		// Filtrar array de productos con la palabra buscada
		let results = products.filter(product => {
			return product.name.toUpperCase().includes(keywords)
		})

		// console.log(typeof results);
		// console.log(results.length);

		res.render('results.ejs', { results, keywords, toThousand })
	},
};

module.exports = controller;
