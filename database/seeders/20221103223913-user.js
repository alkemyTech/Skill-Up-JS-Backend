"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Test1",
        lastName: "Test1",
        email: "test@test.com",
        password: "123456",
      },
      {
        firstName: "Test2",
        lastName: "Test2",
        email: "test2@test.com",
        password: "123456",
      },
      {
        firstName: "Test3",
        lastName: "Test3",
        email: "test3@test.com",
        password: "123456",
      },
      {
        firstName: "Test4",
        lastName: "Test4",
        email: "test4@test.com",
        password: "123456",
      },
      {
        firstName: "Test5",
        lastName: "Test5",
        email: "test5@test.com",
        password: "123456",
        roleId: 1
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {})
  },
};
