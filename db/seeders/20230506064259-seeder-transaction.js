"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "transactions",
      [
        {
          user_id: 1,
          category_id: 1,
          name: "Starbucks",
          price: 7.5,
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          category_id: 1,
          name: "McDonalds",
          price: 6.3,
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          category_id: 4,
          name: "Bus Ride",
          price: 1.55,
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          category_id: 7,
          name: "Uniqlo",
          price: 19.9,
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
    await queryInterface.bulkDelete("transactions", null, {});
  },
};
