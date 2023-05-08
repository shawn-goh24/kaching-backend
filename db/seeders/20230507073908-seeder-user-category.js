"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_categories", [
      {
        user_id: 1,
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        category_id: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_categories", null, {});
  },
};
