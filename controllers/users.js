const { models } = require('../libs/sequelize');
const ctrlAccount = require("./account");
const boom = require('@hapi/boom');
const { encryptPassword } = require("../utils/encryptPassword");

module.exports = {
  get: async (id, query) => {
    const options = {
      association: 'transaction'
    };
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit= parseInt(limit);
      options.offset= parseInt(offset);
    };
    const user = await models.User.findByPk(id, {
      include: [
        {
          association: 'account',
          include: [
            options
          ]
        }
      ]
    });

    return user;
  },
  getAll: async (query) => {
    const options = {
      include: ['account']
    };
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit= parseInt(limit);
      options.offset= parseInt(offset);
    };
    const users = await models.User.findAll(options);
    return users;
  },
  getByEmail: async (email) => {
    const user = await models.User.findOne({
      where: {
        email
      }
    });
    if (user) return user;
    else throw boom.notFound('User not found')
  },
  post: async (schema) => {
    const pass = await encryptPassword(schema.password)
    const [user, created] = await models.User.findOrCreate({
      where: {
        email: schema.email
      },
      defaults: {
        ...schema,
        password: pass
      }
    })
    if (created) {
      //here the axios.post with userId to accounts.post/create to link an account in a new user
      let account = await ctrlAccount.post(user.id);
      return { user, account } // and account;
    }
    else throw boom.forbidden("Email already exists")
  },
  delete: async (id) => {
    let account = await ctrlAccount.delete(id);

    let user = await models.User.destroy({
      where: {
        id: id
      }
    });
    if (user !== 0 && account !== false) return "deleted"
    else throw boom.notImplemented("This user doesn't exists!");
  }

}
