const { DataTypes } = require("sequelize");

const initCategory = (sequelize) =>
  sequelize.define(
    "Category",
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
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      incomeExpenseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "incomeExpenses",
          key: "id",
        },
      },
      defaultCategory: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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

module.exports = initCategory;
