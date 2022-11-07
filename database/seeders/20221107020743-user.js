'use strict';
const { faker } = require('@faker-js/faker')
const quantity = 11
const data = []

for (let i = 1; i < quantity; i++) {
  data.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    roleId: true,
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', data, {})
},

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};


