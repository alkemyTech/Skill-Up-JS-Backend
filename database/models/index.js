const { Role, RoleSchema } = require('./role');
const { User, UserSchema } = require('./user')
const { Account, AccountSchema } = require('./account')

function setupModels(sequelize) {
  Role.init(RoleSchema, Role.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Account.init(AccountSchema, Account.config(sequelize));

  User.associate(sequelize.models);
  Role.associate(sequelize.models);
  Account.associate(sequelize.models);
}

module.exports = { setupModels };
