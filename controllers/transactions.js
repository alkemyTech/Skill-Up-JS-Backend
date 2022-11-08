const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');
const accountService = require('./account');
module.exports = {
  get: async (id) => {
    const transaction = await models.Transaction.findByPk(id, {
      include: [
        {
          association: 'account',
          include: ['user'],
        },
      ],
    });
    if (transaction) {
      return transaction;
    } else {
      throw boom.notFound('Transaction not found');
    }
  },
  getAll: async () => {
    const transaction = await models.Transaction.findAll();
    return transaction;
  },
  create: async (body) => {
    //descuento el dinero de la cuenta de origen
    await accountService.update(
      body.accountId,
      body.amount * -1,
      body.toAccountId
    );
    //acredito el dinero en el destino
    await accountService.update(body.toAccountId, body.amount);
    //creo la transferencia
    const newTransaction = await models.Transaction.create(body);

    return newTransaction;
  },
  delete: async (id) => {
    const deleted = await models.Transaction.destroy({
      where: {
        id,
      },
    });
    if (deleted !== 0) return true;
    else throw boom.conflict("This transactions doesn't exists");
  },
  update: async (id, body) => {
    const transaction = await models.Transaction.findByPk(id);

    const updatedTransaction = {
      ...transaction,
      concept: body.concept,
    };
    await transaction.update(updatedTransaction);
    return 'Updated';
  },

  paginate: async (req, res, next) => {
    try {
      const page = req.query.page - 1;
      const userId = req.user.sub;
      const userAccount = await models.Account.findOne({ where: { userId } });
      const conditions = {
        accountId: userAccount.id,
        toAccountId: userAccount.id,
      };

      if (req.query.category) conditions.category = req.query.category;

      const numberOfTransactions = await models.Transaction.count({
        where: conditions,
      });

      if (numberOfTransactions) {
        const numberOfPages = Math.ceil(numberOfTransactions / 10);
        const transactions = await models.Transaction.findAll({
          where: conditions,
          limit: 10,
          offset: page * 10,
          order: [['created_at', 'DESC']],
        });
        return res.send({ pages: numberOfPages, transactions: transactions });
      } else return res.send({ pages: 0, transactions: [] });
    } catch (error) {
      next(error);
    }
  },
};
