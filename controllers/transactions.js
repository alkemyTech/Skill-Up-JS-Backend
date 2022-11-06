const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom')
const accountService = require('./account');

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
      throw boom.notFound('Transaction not found');
    }
  },
  getAll: async() => {
    const transaction = await models.Transaction.findAll();
    return transaction;
  },
  create: async(body) => {
    //descuento el dinero de la cuenta de origen
    await accountService.update(body.accountId, body.amount*-1);
    //creo la transferencia
    const newTransaction = await models.Transaction.create(body);
    //acredito el dinero en el destino
    await accountService.update(body.toAccountId, body.amount)
    return(newTransaction);
  },
  //
  update: async(id, body) => {
    const transaction = await this.get(id);
    const updatedTransaction = {
      ...transaction,
      concept: body.concept
    }
    await transaction.update(updatedTransaction);
    return(body);
  }
}
