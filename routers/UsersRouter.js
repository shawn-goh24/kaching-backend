const express = require("express");
const usersController = require("../controllers/UsersController");

const router = express.Router();

// get a single user based on ID (Debugging purpose)
router.get("/", usersController.getAllUser);
router.post("/home", usersController.checkUser);
router.get("/transaction", usersController.getAllTransaction);
router.get("/budget", usersController.getAllBudget);
router.get("/category", usersController.getAllCategory);
router.get("/incomeexpense", usersController.getAllIncomeExpense);

module.exports = router;
