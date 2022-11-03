"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Roles", [
      { id: "admin", rol: "admin" },
      { id: "user", rol: "user" },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
