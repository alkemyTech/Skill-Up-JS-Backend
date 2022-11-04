"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Test1",
        lastName: "Test1",
        email: "test@test.com",
        password:
          "$2b$10$2Z.Ntn9732JiiYse27ZL9OeO669Yni4n1gOtHh1NqoWWpHt8bOMva",
        roleId: 2,
      },
      {
        firstName: "Test2",
        lastName: "Test2",
        email: "test2@test.com",
        password:
          "$2b$10$2Z.Ntn9732JiiYse27ZL9OeO669Yni4n1gOtHh1NqoWWpHt8bOMva",
        roleId: 2,
      },
      {
        firstName: "Test3",
        lastName: "Test3",
        email: "test3@test.com",
        password:
          "$2b$10$2Z.Ntn9732JiiYse27ZL9OeO669Yni4n1gOtHh1NqoWWpHt8bOMva",
        roleId: 2,
      },
      {
        firstName: "Test4",
        lastName: "Test4",
        email: "test4@test.com",
        password:
          "$2b$10$2Z.Ntn9732JiiYse27ZL9OeO669Yni4n1gOtHh1NqoWWpHt8bOMva",
        roleId: 2,
      },
      {
        firstName: "admin",
        lastName: "admin",
        email: "admin@admin.com",
        password:
          "$2b$10$2Z.Ntn9732JiiYse27ZL9OeO669Yni4n1gOtHh1NqoWWpHt8bOMva",
        roleId: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
