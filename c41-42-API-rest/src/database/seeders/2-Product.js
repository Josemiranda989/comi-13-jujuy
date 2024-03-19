"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Batman",
          price: 59.99,
          categoryId: 1,
          description: "Descripción del juego 1",
          active: true,
        },
        {
          name: "COD",
          price: 49.99,
          categoryId: 2,
          description: "Descripción del juego 2",
          active: true,
        },
        {
          name: "FORZA HORIZON",
          price: 39.99,
          categoryId: 3,
          description: "Descripción del juego 3",
          active: true,
        },
        // Agrega más productos (juegos) según sea necesario
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
