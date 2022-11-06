const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom')
const accountService = require('./account');

module.exports = {
  get: async (id) => {
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
  getAll: async () => {
    const transaction = await models.Transaction.findAll();
    return transaction;
  },
  create: async (body) => {
    //descuento el dinero de la cuenta de origen
    await accountService.update(body.accountId, body.amount * -1);
    //creo la transferencia
    const newTransaction = await models.Transaction.create(body);
    //acredito el dinero en el destino
    await accountService.update(body.toAccountId, body.amount)
    return (newTransaction);
  },
  update: async (id, body) => {
    const transaction = await models.Transaction.findByPk(id);
    const updatedTransaction = await transaction.update(body);
    return (updatedTransaction);
  },
  delete: async (id) => {
    const deleted = await models.Transaction.destroy({
      where: {
        id
      }
    });
    if (deleted !== 0) return true;
    else throw boom.conflict("This transactions doesn't exists")
  }
}
