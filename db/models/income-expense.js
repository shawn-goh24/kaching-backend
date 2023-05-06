const { DataTypes } = require("sequelize");

const initIncomeExpense = (sequelize) =>
  sequelize.define(
    "IncomeExpense",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
    {
      underscored: true,
    }
  );

module.exports = initIncomeExpense;
