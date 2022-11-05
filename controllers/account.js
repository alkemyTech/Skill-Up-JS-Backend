
const { models } = require('../libs/sequelize');


module.exports = {

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
    }
}