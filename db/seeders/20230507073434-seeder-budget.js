"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "budgets",
      [
        {
          user_id: 1,
          category_id: 1,
          amount: 500,
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          category_id: 2,
          amount: 200,
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          category_id: 3,
          amount: 100,
          date: new Date(),
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
    await queryInterface.bulkDelete("budgets", null, {});
  },
};
