"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        { name: "Acción" },
        { name: "Aventura" },
        { name: "Estrategia" },
        { name: "Terror" },
        { name: "RPG" },
        { name: "FPS" },
        // Agrega más categorías según sea necesario
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
