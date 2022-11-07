const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');


const getAccount = async (id) => {
  let account = await models.Account.findByPk(id);
  if (account) return account
  else throw boom.notFound('Account not found');
}
module.exports = {

  getAccount,
  getByUser: async (userId) => {
    let account = await models.Account.findOne({
      where: {
        userId
      }
      , include: ['transaction']
    })
    if (account) return account
    else throw boom.notFound("The account don't belong to this user")
  },
  post: async (userId) => {
    let account = await models.Account.create({
      userId
    })
    return account
  },
  delete: async (userId) => {
    let account = await models.Account.destroy({
      where: {
        userId: userId
      }
    })
    if (account !== 0) return "deleted"
    else return false
  },
  update: async (userId, accountId, amount, toAccountId = undefined) => {
    let account = await getAccount(accountId);

    if (account.dataValues.userId === userId) {
      if (toAccountId) await getAccount(toAccountId)
      if (account.isBlocked) throw boom.unauthorized("This account is blocked");
      let money = Number(account.money) + Number(amount)
      if (money >= 0) {
        account = await account.update({
          ...account,
          money
        });
        return account
      } else {
        throw boom.conflict('You do not have enough money')
      }
    } else {
      throw boom.unauthorized('It is not your account :P')
    }
  },

}
