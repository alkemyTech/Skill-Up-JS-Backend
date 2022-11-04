"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Transactions",
      [
        {
          description: "transfer1",
          amount: 2000,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          type: "income",
          categoryId: 1,
        },
        {
          description: "transfer2",
          amount: 8000,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          type: "income",
          categoryId: 1,
        },
        {
          description: "transfer3",
          amount: 5000,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          type: "outcome",
          categoryId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};
