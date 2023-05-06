"use strict";

// const fs = require("fs");
// const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
// const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config/database.js")[env];
const initUser = require("./user.js");
const initBudget = require("./budget.js");
const initIncomeExpense = require("./income-expense.js");
const initTransaction = require("./transaction.js");
const initCategory = require("./category.js");
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// initialise models
db.User = initUser(sequelize);
db.Budget = initBudget(sequelize);
db.IncomeExpense = initIncomeExpense(sequelize);
db.Transaction = initTransaction(sequelize);
db.Category = initCategory(sequelize);

// user-category-incomeexpense
db.User.belongsToMany(db.IncomeExpense, { through: db.Category });
db.IncomeExpense.belongsToMany(db.User, { through: db.Category });

// users-transaction-categories (M-M)
db.User.belongsToMany(db.Category, { through: db.Transaction });
db.Category.belongsToMany(db.User, { through: db.Transaction });

// users-budget-category
db.User.belongsToMany(db.Category, { through: db.Budget });
db.Category.belongsToMany(db.User, { through: db.Budget });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
