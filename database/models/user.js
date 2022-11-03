'use strict';
const {
  Model
} = require('sequelize');

import { hash } from 'bcrypt'

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Transaction, { foreignKey: 'userId' });
      User.belongsTo(models.Role, { foreignKey: 'roleId' });
    }
  };
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    deletedAt: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    timestamps: true,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user, options) => {
        const saltRounds = 10
        const hashedPassword = await hash(user.password, saltRounds)
        user.password = hashedPassword;
      }
    }
  });
  return User;
};