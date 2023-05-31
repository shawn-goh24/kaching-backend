"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          first_name: "Shawn",
          last_name: "Goh",
          email: "shawngoh.dummy@gmail.com",
          image_url: "",
          main_currency: "SGD",
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
    await queryInterface.bulkDelete("users", null, {});
  },
};
