const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom')

module.exports = {
  get: async(id) => {
    const transaction = await models.Transaction.findByPk(id, {
      include: [
        {
          association: 'account',
          include: ['user']
        }
      ]
    });
    if (transaction) {
      return transaction
    } else {
      throw boom.notFound('Wallet not found');
    }
  },
  getAll: async() => {
    const transaction = await models.Transaction.findAll();
    return transaction;
  },
  create: async(body) => {
    const newTransaction = await models.Transaction.create(body);
    return(newTransaction);
  },
  update: async(id, body) => {
    const transaction = await models.Transaction.findByPk(id);
    const updatedTransaction = await transaction.update(body);
    return(updatedTransaction);
  }
}
