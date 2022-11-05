'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [{
      name: "income",
      description: "money added to account",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "outcome",
      description: "money substracted from account",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
