const express = require("express");
const usersController = require("../controllers/UsersController");

const router = express.Router();

// get a single user based on ID w/ transactions
router.post("/home", usersController.checkUser);
router.get("/category/:userId", usersController.getUserCategories);
router.put("/edit/:userId", usersController.updateUser);

router.get("/", usersController.getAllUser);
router.get("/:userId/transaction", usersController.getAllTransaction);
router.get("/:userId/budget", usersController.getAllBudget);
router.get("/:userId/incomeexpense", usersController.getAllIncomeExpense);

module.exports = router;
