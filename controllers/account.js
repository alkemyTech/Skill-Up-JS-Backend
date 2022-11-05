const { models } = require('../libs/sequelize');


module.exports = {

    post: async (userId) => {
        let account = await models.Account.create({
            userId
        })
        return account
    }
}