const { Category } = require("../database/models");

module.exports = {
  getList: async (req, res) => {
    try {
      const categories = await Category.findAll({
        include: ["games"],
      });

      res.json({
        meta: {
          status: 200,
          count: categories.legth,
          message: "Categories retrieved successfully",
        },
        data: categories,
      });
    } catch (error) {
      console.log(error);
    }

    // res.send("Esta ruta funciona");
  },
  getDetail: async (req, res) => {
    try {
      const categorySelected = await Category.findByPk(req.params.id, {
        include: ["games"],
      });

      if (categorySelected) {
        return res.status(200).json({
          meta: {
            status: 200,
            message: "Categories retrieved successfully",
          },
          data: categorySelected,
        });
      }
      return res.status(400).json({
        error: {
          status: 400,
          message: "Category not found",
        },
      });
    } catch (error) {
      console.error(error);
    }

    // res.send("Esta ruta funciona y el param es" + req.params.id);
  },
};
