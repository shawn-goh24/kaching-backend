"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Food",
          color: "#ff5733",
          income_expense_id: 1,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Entertainment",
          color: "#d500f9",
          income_expense_id: 1,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Transportation",
          color: "#0080ff",
          income_expense_id: 1,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Groceries",
          color: "#3b3b3b",
          income_expense_id: 1,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Housing",
          color: "#f4d03f",
          income_expense_id: 1,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Clothing",
          color: "#00ff7f",
          income_expense_id: 1,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Utilities",
          color: "#ff1493",
          income_expense_id: 1,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Health",
          color: "#ff8c00",
          income_expense_id: 1,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Education",
          color: "#800000",
          income_expense_id: 1,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Insurance",
          color: "#6a5acd",
          income_expense_id: 1,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Tax",
          color: "#f08080",
          income_expense_id: 1,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Work",
          color: "#00ffff",
          income_expense_id: 1,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Salary",
          color: "#ffa07a",
          income_expense_id: 2,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Allowance",
          color: "#8b0000",
          income_expense_id: 2,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bonus",
          color: "#00ced1",
          income_expense_id: 2,
          default_category: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {
        underscored: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
