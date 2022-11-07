'use strict';
const { faker } = require('@faker-js/faker')
const quantity = 50
const data = []

for (let i = 1; i < quantity; i++) {
  data.push({
    id: i,
    description: faker.lorem.paragraph(),
    amount: faker.finance.amount(100, 999999),
    userId: faker.finance.amount(1, 10),
    date: new Date(),
    categoryId:faker.finance.amount(1, 2),
    updatedAt: new Date(),
    createdAt: new Date(),
  })
}


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Transactions', data, {})
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};
