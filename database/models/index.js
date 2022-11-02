const { Role, RoleSchema } = require('./role');

function setupModels(sequelize) {
  Role.init(RoleSchema, Role.config(sequelize));
}

module.exports = { setupModels };
