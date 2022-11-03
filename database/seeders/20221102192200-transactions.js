"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Transactions",
      [
        {
          description: "transfer1",
          amount: "2000",
          userId: "1",
          date: "0001-01-01 through 9999-12-31",
        },
        {
          description: "transfer2",
          amount: "8000",
          userId: "3",
          date: "0001-01-01 through 9999-12-31",
        },
        {
          description: "transfer3",
          amount: "5000",
          userId: "2",
          date: "0001-01-01 through 9999-12-31",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};
