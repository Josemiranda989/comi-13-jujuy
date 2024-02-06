const { body } = require('express-validator')

module.exports = [
    body('name')
        .notEmpty().withMessage('Debe tener un nombre').bail()
        .isLength({ min: 1, max: 40 }).withMessage('El nombre debe contener de 1 a 40 caracteres'),
    body('price').notEmpty().withMessage('Debe tener un precio'),
    body('discount').notEmpty().withMessage('Debe tener un descuento'),
    body('description').notEmpty().withMessage('Debe tener una descripcion')
]