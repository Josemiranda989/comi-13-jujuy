const { Product } = require("../database/models");

module.exports = {
  getList: async (req, res) => {
    try {
      const lists = await Product.findAll({
        include: ["categories"],
        attributes: {
          exclude: ["categoryId"],
        },
      });

      const response = {
        meta: {
          status: 200,
          count: lists.length,
          path: "http://localhost:3000/products",
        },
        data: lists,
      };

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  getDetail: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);

      const response = {
        meta: {
          status: 200,
          path: `http://localhost:3000/products/detail/${product.id}`,
        },
        data: product,
      };

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  getOrder: async (req, res) => {
    try {
      const lists = await Product.findAll({
        order: [["price", "asc"]],
      });

      const response = {
        meta: {
          status: 200,
          count: lists.length,
          path: "http://localhost:3000/products/order",
        },
        data: lists,
      };

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  setNewProduct: async (req, res) => {
    try {
      const { name, price, categoryId, active, description } = req.body;
      const response = await Product.create({
        name: name,
        price: price,
        categoryId: categoryId,
        description: description,
        active: active,
      });
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
