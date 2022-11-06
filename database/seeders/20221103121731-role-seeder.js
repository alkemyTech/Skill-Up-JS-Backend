'use strict';
const { ROLE_TABLE } = require('../models/role');

module.exports = {
  up: async (queryInterface) => {
    const admin = {
      id: 1,
      name: 'Admin',
      description: 'El mandamas'
    }
    const customer = {
      id: 2,
      name: 'Customer',
      description: 'The customer is always right'
    }
    return queryInterface.bulkInsert(ROLE_TABLE, [
      admin, customer
    ]);
  },

  down: async (queryInterface) => {
   return queryInterface.bulkDelete(ROLE_TABLE, {}, null)
  }
};
