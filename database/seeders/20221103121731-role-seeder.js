'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      {
        "name": "Administrador",
        "description": "Usuarios administradores del sitio",
      },
      {
        "name": "Regular",
        "description": "Usuarios regulares del sitio",
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('roles', {}, null)
  }
};
