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
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: "http://www.elblogdecha.org/wp-content/uploads/2021/06/perfil-vacio.jpg"
      },
      {
        firstName: "Test2",
        lastName: "Test2",
        email: "test2@test.com",
        password:
          "$2b$10$2Z.Ntn9732JiiYse27ZL9OeO669Yni4n1gOtHh1NqoWWpHt8bOMva",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: 2,
        avatar: "http://www.elblogdecha.org/wp-content/uploads/2021/06/perfil-vacio.jpg"
      },
      {
        firstName: "Test3",
        lastName: "Test3",
        email: "test3@test.com",
        password:
          "$2b$10$2Z.Ntn9732JiiYse27ZL9OeO669Yni4n1gOtHh1NqoWWpHt8bOMva",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: 2,
        avatar: "http://www.elblogdecha.org/wp-content/uploads/2021/06/perfil-vacio.jpg"
      },
      {
        firstName: "Test4",
        lastName: "Test4",
        email: "test4@test.com",
        password:
          "$2b$10$2Z.Ntn9732JiiYse27ZL9OeO669Yni4n1gOtHh1NqoWWpHt8bOMva",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: 2,
        avatar: "http://www.elblogdecha.org/wp-content/uploads/2021/06/perfil-vacio.jpg"
      },
      {
        firstName: "admin",
        lastName: "admin",
        email: "admin@admin.com",
        password:
          "$2b$10$2Z.Ntn9732JiiYse27ZL9OeO669Yni4n1gOtHh1NqoWWpHt8bOMva",
        roleId: 1,
        firstName: "Test5",
        lastName: "Test5",
        email: "test5@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: 1,
        avatar: "http://www.elblogdecha.org/wp-content/uploads/2021/06/perfil-vacio.jpg"
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
