const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom')
const accountService = require('./account');

const get = async (id) => {
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
}

const checkAccount = async (transactionId, userId) => {
  const transaction = await get(transactionId);

  if (transaction.dataValues.account.dataValues.userId === userId) {
    return transaction
  } else {
    //paso un notFound, porque si no es quien realizó la transferencia,
    //no debería saber que existe
    throw boom.notFound('Transaction not found');
  };
};

module.exports = {
  get,
  getAll: async () => {
    const transaction = await models.Transaction.findAll();
    return transaction;
  },
  create: async (userId, body) => {
    //descuento el dinero de la cuenta de origen
    await accountService.update(userId, body.accountId, body.amount * -1, body.toAccountId);
    //acredito el dinero en el destino
    await accountService.update(body.toAccountId, body.amount)
    //creo la transferencia
    const newTransaction = await models.Transaction.create(body);

    return (newTransaction);
  },
  delete: async (userId, transactionId) => {
    const transaction = await checkAccount(transactionId, userId);
    await transaction.destroy();
    return({message: 'Deleted'});
  },
  update: async (userId, transactionId, body) => {
    const transaction = await checkAccount(transactionId, userId)

    const updatedTransaction = {
      ...transaction,
      concept: body.concept
    }
    await transaction.update(updatedTransaction);
    return ("Updated");
  }
}
