const { Model, DataTypes, Sequelize } = require('sequelize');
const { ROLE_TABLE } = require('./role')

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'first_name'
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  roleId: {
    field: 'role_id',
    type: DataTypes.INTEGER,
    references: {
      model: ROLE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    field: "createdAt",
    type: DataTypes.DATE
  },
  updatedAt: {
    field: "updatedAt",
    type: DataTypes.DATE
  },
  deletedAt: {
    field: "deletedAt",
    type: DataTypes.DATE
  }
}

class User extends Model {
  static associate(models) {
    this.belongsTo(models.Role, { as: 'role' });
    this.hasOne(models.Account, {
      as: 'account',
      foreignKey: 'userId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      paranoid: true,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
