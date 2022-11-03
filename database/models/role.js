"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.hasMany(models.User, { foreignKey: "roleId" });
    }
  }
  Role.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      rol: {
        type: DataTypes.STRING,
        defaultValue: "user",
        validate: {
          customValidator: (value) => {
            const enums = ["superadmin", "admin", "user"];
            if (!enums.includes(value)) {
              throw new Error("not a valid option");
            }
          },
        },
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: "Role",
    }
  );
  return Role;
};
