const { faker } = require('@faker-js/faker');
const { development } = require('../../config/config')
const { encryptPassword } = require('../../utils/encryptPassword');
const { USER_TABLE } = require('../models/user');
const { ACCOUNT_TABLE } = require('../models/account');


module.exports = {
  up: async (queryInterface) => {
    const clients = []
    const accounts = []
    const password = await encryptPassword(development.adminPass)
    const admin = {
      id: 'b5a928fd-f1be-47d5-b9ec-e448a1b84848',
      first_name: 'John',
      last_name: 'Doe',
      email: development.adminEmail,
      password: password,
      role_id: 1
    }
    const god = {
      id: 'b5a928fd-f1be-47d5-b9ec-e448a1b84849',
      first_name: 'John',
      last_name: 'Doe',
      email: 'godAccount@cloud.com',
      password: password,
      role_id: 3
    }

    for (let index = 0; index < 100; index++) {
      const client = {
        id: faker.datatype.uuid(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role_id: 2
      }
      const account = {
        id: faker.datatype.uuid(),
        money: faker.finance.amount(),
        is_blocked: false,
        userId: client.id
      };
      clients.push(client);
      accounts.push(account);
    }
    await queryInterface.bulkInsert(USER_TABLE, [
      admin, god, ...clients
    ]);
    return queryInterface.bulkInsert(ACCOUNT_TABLE, [
      ...accounts
    ])
  },

  down: async (queryInterface) => {
   return queryInterface.bulkDelete(USER_TABLE, {}, null)
  }
};
