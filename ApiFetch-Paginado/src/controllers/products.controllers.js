const { Product } = require("../database/models");

module.exports = {
  getList: async (req, res) => {
    try {
      const currentPage = req.query.page || 1; // Página actual
      const limit = 10; // Cantidad de productos por página

      const totalProducts = await Product.count(); // Cantidad de productos

      const totalPages = Math.ceil(totalProducts / limit); // total de paginas

      const offset = (currentPage - 1) * limit; // inicio y fin

      const products = await Product.findAll({
        offset: offset,
        limit: limit,
      }); //todos los productos de la pagina actual

      res.render("products", {
        products,
        totalPages,
        currentPage,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
