const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const { validationResult } = require('express-validator')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	list: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products.ejs', { products, toThousand })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let product = products.find(product => product.id == req.params.id)
		// console.log('product-linea-18', product);
		if (product) {
			return res.render('detail.ejs', { product, toThousand })
		}
		res.send(`
		<h1>El producto que buscas no existe</h1>
		<a href='/products'>Voler al catalogo</a>
		`)
	},

	// Create - Form to create
	createForm: (req, res) => {
		res.render('product-create-form.ejs')
	},

	// Create -  Method to store
	processCreate: (req, res) => {
		// let {name, price, discount, category, description, image} = req.body 

		// const newProduct = {
		// 	id: Date.now(),
		// 	name: name,
		// 	price: price,
		// 	discount: discount,
		// 	category: category,
		// 	description: description,
		// 	image: image || 'default-img.png',
		// }
		// Armamos el nuevo producto

		let result = validationResult(req)

		if (result.isEmpty()) {
			const newProduct = {
				id: Date.now(),
				name: req.body.name,
				price: req.body.price,
				discount: req.body.discount,
				category: req.body.category,
				description: req.body.description,
				image: req.file?.filename || 'default-img.png',
			}
			// Agregamos el nuevo producto al listado
			products.push(newProduct)
			// Convertimos a json el objeto javascript
			let productsJSON = JSON.stringify(products, null, ' ')
			// Escribimos el json
			fs.writeFileSync(productsFilePath, productsJSON)

			res.redirect('/products')
		} else {
			console.log(result.mapped());
			res.render('product-create-form.ejs', {
				old: req.body,
				errors: result.mapped()
			})
		}


	},

	// Update - Form to edit
	editForm: (req, res) => {
		// Obtener los datos del producto a editar
		let product = products.find(product => product.id == req.params.id)
		if (product) {
			// Renderizar la vista con los datos
			return res.render('product-edit-form.ejs', { product })
		}
		res.send(`
		<h1>El producto que intentas editar no existe</h1>
		<a href='/products'>Voler al catalogo</a>
		`)
	},
	// Update - Method to update
	processEdit: (req, res) => {
		// Ver como llega la info por body y por file
		// console.log("🚀 ~ req:", req.params)
		// console.log("🚀 ~ req.body:", req.body)
		// console.log("🚀 ~ req.file:", req.file)
		// Obtener el id del producto a editar 
		let id = req.params.id
		// Buscamos el producto a editar con ese id
		let productEdit = products.find(product => product.id == id)
		// Si lo encuentra
		if (productEdit) {
			productEdit.name = req.body.name || productEdit.name
			productEdit.price = req.body.price || productEdit.price
			productEdit.discount = req.body.discount || productEdit.discount
			productEdit.description = req.body.description || productEdit.description
			productEdit.category = req.body.category || productEdit.category
			// Estaria bueno borrar la vieja si sube una nueva
			productEdit.image = req.file?.filename || productEdit.image

			// Convertir a JSON y Sobre-escribir el json de productos
			fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
			// Redirigir al listado
			res.redirect('/products')
		} else {
			// Si no lo encuentra
			res.send('El producto a editar no existe')
		}
	},

	// Delete - Delete one product from DB
	delete: (req, res) => {
		// Obtener el id del producto
		let id = req.params.id

		// Quitar imagen
		const productToDelete = products.find(product => product.id == id)
		if (productToDelete.image != 'default-image.png') {
			fs.unlinkSync(path.join(__dirname, '../../public/images/products', productToDelete.image))
		}

		// Quitar producto deseado
		products = products.filter(product => product.id != id)
		// console.log(products);
		// Convertir a json el listado actualizado
		products = JSON.stringify(products, null, 2)
		// Re-escribir el json
		fs.writeFileSync(productsFilePath, products)
		// Redireccionar
		res.redirect('/products')
	}
};

module.exports = controller;