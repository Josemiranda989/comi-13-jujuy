const booksControllers = {
    list: (req, res) => {
        res.json([
            {
                id: 1,
                nombre: 'Producto1'
            },
            {
                id: 2,
                nombre: 'Producto2'
            }
        ])
    },
    detail: (req, res) => {
        const id = req.params.id
        const nombre = req.params.name || 'El sin nombre'
        res.send(`La persona con el id ${id} es ${nombre}`)
    }
}

module.exports = booksControllers;