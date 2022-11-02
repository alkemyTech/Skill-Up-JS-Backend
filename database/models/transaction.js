'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here with user
      transaction.belongsTo(models.User, { foreignKey: 'userId' });

      // define association here with CATEGORYId
      transaction.belongsTo(models.Category, { foreignKey: 'categoryId' });
       
    }
  };
  transaction.init({
    id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    date: DataTypes.DATE,
    isDeleted: DataTypes.Boolean
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};

 