const bcryptjs = require('bcryptjs');
const {
	validationResult
} = require('express-validator');

const User = require('../models/User');

const controller = {
	register: (req, res) => {
		return res.render('userRegisterForm');
	},
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);
		// Si hay errores, volvemos al formulario
		if (resultValidation.notEmpty()) {
			return res.render('userRegisterForm', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
		// Buscar un usuario por email
		let userInDB = User.findByField('email', req.body.email);
		// Si lo encuentra, es decir si es un truthy, volvemos al form porque ya está registrado
		if (userInDB) {
			return res.render('userRegisterForm', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}
		// Si pasamos los 2 if anteriores, creamos un nuevo Objeto con el req.body
		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}
		// Usamos el metodo Create del modelo User
		User.create(userToCreate);
		// Redirecciona al login
		return res.redirect('/user/login');
	},
	login: (req, res) => {
		return res.render('userLoginForm');
	},
	loginProcess: (req, res) => {
		// Buscamos por email la si el usuario ya esta registrado
		let userToLogin = User.findByField('email', req.body.email);
		// Si lo encuentra, es decir si es un truthy, comparamos las demás condiciones
		if (userToLogin) {
			// Comparamos el password con bcryptjs
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			// Si nos devuelve un true
			if (isOkThePassword) {
				// Borramos el password del objeto
				delete userToLogin.password;
				// Creamos una session nueva
				req.session.userLogged = userToLogin;
				// Si eligio recordame crea que una cookie useEmail 
				if (req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/user/profile');
			}
			return res.render('userLoginForm', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('userLoginForm', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},
	profile: (req, res) => {
		return res.render('userProfile', {
			user: req.session.userLogged
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;