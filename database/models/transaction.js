const { Model, DataTypes, Sequelize } = require('sequelize');
const { ACCOUNT_TABLE } = require('./account')

const TRANSACTION_TABLE = 'transactions';

const TransactionSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  amount: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  concept: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING
  },
  accountId: {
    field: 'account_id',
    type: Sequelize.UUID,
    references: {
      model: ACCOUNT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  toAccountId: {
    allowNull: false,
    field: 'to_account_id',
    type: Sequelize.UUID,
    references: {
      model: ACCOUNT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  deletedAt: {
    field: "deletedAt",
    type: DataTypes.DATE
  }
}

class Transaction extends Model {
  static associate(models) {
    this.belongsTo(models.Account, { as: 'account' });
    this.belongsTo(models.Account, { as: 'toAccount' });
  }

  static config(sequelize) {
    return {
      sequelize,
      paranoid: true,
      tableName: TRANSACTION_TABLE,
      modelName: 'Transaction',
      timestamps: true
    }
  }
}

module.exports = { TRANSACTION_TABLE, TransactionSchema, Transaction }
