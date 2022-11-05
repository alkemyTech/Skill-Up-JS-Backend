const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');
const { encryptPassword, comparePassword } = require('../utils/encryptPassword')

module.exports = {

    login: async (email, password) => {

      const hash = await encryptPassword(body.password);
      const compare = await comparePassword(body.password, hash);
    }
}
