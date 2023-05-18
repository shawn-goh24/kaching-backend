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
const initIncomeExpense = require("./income_expense.js");
const initTransaction = require("./transaction.js");
const initCategory = require("./category.js");
const initUserCategory = require("./user_category.js");
const initBill = require("./bill.js");
const initNotification = require("./notification.js");
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
db.UserCategory = initUserCategory(sequelize);
db.Bill = initBill(sequelize);
db.Notification = initNotification(sequelize);

// IncomeExpense - Category (1-M)
db.IncomeExpense.hasMany(db.Category, {
  foreignKey: "incomeExpenseId",
});
db.Category.belongsTo(db.IncomeExpense);

// User - Transaction (1-M)
db.User.hasMany(db.Transaction, {
  foreignKey: "userId",
});
db.Transaction.belongsTo(db.User);

// User - Budget (1-M)
db.User.hasMany(db.Budget, {
  foreignKey: "userId",
});
db.Budget.belongsTo(db.User);

// User_Category (M-M)
db.User.belongsToMany(db.Category, { through: db.UserCategory });
db.Category.belongsToMany(db.User, { through: db.UserCategory });
db.UserCategory.belongsTo(db.User);
db.UserCategory.belongsTo(db.Category);

// Budget - Category (1-M)
db.Category.hasMany(db.Budget, {
  foreignKey: "categoryId",
});
db.Budget.belongsTo(db.Category);
// Budget - Category (1-1)
// db.Budget.hasOne(db.Category);
// db.Category.belongsTo(db.Budget);

// Transaction - Category (1-1)
db.Category.hasMany(db.Transaction, {
  foreignKey: "categoryId",
});
db.Transaction.belongsTo(db.Category);
// Transaction - Category (1-M)
// db.Transaction.hasOne(db.Category, {
//   foreignKey: "categoryId",
// });
// db.Category.belongsTo(db.Transaction);

// User - Bills (1-M)
db.User.hasMany(db.Bill, {
  foreignKey: "userId",
});
db.Bill.belongsTo(db.User);

// User - Notification (1-M)
db.User.hasMany(db.Notification, {
  foreignKey: "userId",
});
db.Notification.belongsTo(db.User);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
