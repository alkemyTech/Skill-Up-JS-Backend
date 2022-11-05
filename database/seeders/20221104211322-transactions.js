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
          categoryId: 1,
        },
        {
          description: "transfer2",
          amount: 2000,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          description: "transfer3",
          amount: 2000,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
        },
        {
          description: "transfer4",
          amount: 2000,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          description: "transfer5",
          amount: 8000,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          description: "transfer6",
          amount: 5000,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
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
