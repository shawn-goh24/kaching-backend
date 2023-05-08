"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "income_expenses",
      [
        {
          name: "Expense",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Income",
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
    await queryInterface.bulkDelete("income_expenses", null, {});
  },
};
