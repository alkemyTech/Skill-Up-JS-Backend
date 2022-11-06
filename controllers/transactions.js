const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom')
const accountService = require('./account');
const userService = require('./users')
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
      throw boom.notFound('Transaction not found');
    }
  },
  getAll: async () => {
    const transaction = await models.Transaction.findAll();
    return transaction;
  },
  create: async (body) => {

    //me transfiero a mi mismo - accountID será del intermediario, TOACCOUNT la mia
    let account = await accountService.getAccount(body.accountId);
    let user = await userService.get(account.userId) // intermediary

    if (user.user.roleId === 3 && body.category === "income-transfer") {
      //descuento el dinero de la cuenta de origen
      await accountService.update(body.accountId, body.amount * -1);
      //creo la transferencia
      const newTransaction = await models.Transaction.create(body);
      //acredito el dinero en el destino
      await accountService.update(body.toAccountId, body.amount)
      return (newTransaction);
    }
    // pago un servicio: accountID será la mia TOACCOUNT intermediary
    if (body.category === "payment") {
      //descuento el dinero de la cuenta de origen
      await accountService.update(body.accountId, body.amount * -1);
      //creo la transferencia
      const newTransaction = await models.Transaction.create(body);
      //acredito el dinero en el destino
      await accountService.update(body.toAccountId, body.amount)
      return (newTransaction);
    }
    // le transfiero a un usuario accuontID Sera la mia TOACCOUNT la del tercero
    // me transfieren account ID sera la del tercero TOACCOUNT la mia.
    if (body.category === "user-transfer") {
      //descuento el dinero de la cuenta de origen
      await accountService.update(body.accountId, body.amount * -1);
      //creo la transferencia
      const newTransaction = await models.Transaction.create(body);
      //acredito el dinero en el destino
      await accountService.update(body.toAccountId, body.amount)
      return (newTransaction);
    }

  },
  delete: async (id) => {
    const deleted = await models.Transaction.destroy({
      where: {
        id
      }
    });
    if (deleted !== 0) return true;
    else throw boom.conflict("This transactions doesn't exists")
  },
  update: async (id, body) => {
    const transaction = await this.get(id);
    const updatedTransaction = {
      ...transaction,
      concept: body.concept
    }
    await transaction.update(updatedTransaction);
    return (body);
  }
}
