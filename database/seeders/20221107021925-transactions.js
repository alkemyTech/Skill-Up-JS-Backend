'use strict';
const { faker } = require('@faker-js/faker')
const quantity = 50
const data = []

for (let i = 1; i < quantity; i++) {
  data.push({
    id: i,
    description: `ERROR: Data too long for column 'description' at row 1`, // Modifique esta linea porque el lorem ipsum es muy largo para description.
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
