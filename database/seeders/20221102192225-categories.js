"use strict";
// "Crear un seeder para popular la base de datos con Categorías para realizar pruebas.
// - Las categorías seran Incomes para los ingresos y Outcomes para los egresos"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Incomes",
          description: "Ingreso",
        },
        {
          name: "Outcomes",
          description: "Egreso",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
