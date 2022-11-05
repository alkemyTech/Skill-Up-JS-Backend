const { getByEmail } = require('./users')
const boom = require('@hapi/boom');
const { encryptPassword, comparePassword } = require('../utils/encryptPassword');

module.exports = {

    login: async (email, password) => {
      const user = await getByEmail(email);
      const hash = await encryptPassword(user.password);
      const hashedUser = {
        ...user,
        password: hash
      }
      const match = await comparePassword(password, hash);
      if (match) {
        delete user.dataValues.password
        return user
      } else {
        throw boom.unauthorized('Invalid password')
      }
    }
}
