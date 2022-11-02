const { Role, RoleSchema } = require('./role');
const { User, UserSchema } = require('./user')

function setupModels(sequelize) {
  Role.init(RoleSchema, Role.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  User.associate(sequelize.models);
  Role.associate(sequelize.models);
}

module.exports = { setupModels };
