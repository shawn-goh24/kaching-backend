"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "bills",
      [
        {
          user_id: 1,
          name: "AXA Insurance",
          amount: 129,
          date: new Date(),
          interval: "Monthly",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          name: "Starhub",
          amount: 55,
          date: new Date(),
          interval: "Monthly",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          name: "Utilities",
          amount: 200,
          date: new Date(),
          interval: "Monthly",
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
    await queryInterface.bulkDelete("bills", null, {});
  },
};
