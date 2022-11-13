"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Transaction.belongsTo(models.User, {
        foreignKey: "toUserId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Transaction.belongsTo(models.Category, {
        foreignKey: "categoryId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Transaction.init(
    {
      description: DataTypes.STRING,
      amount: DataTypes.DECIMAL,
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      toUserId: DataTypes.INTEGER,
      currency: {
        type: DataTypes.ENUM,
        values: ["pesos", "dolares", "euros"],
        defaultValue: "pesos",
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
