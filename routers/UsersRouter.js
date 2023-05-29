const express = require("express");
const usersController = require("../controllers/UsersController");

const router = express.Router();

// get a single user based on ID w/ transactions
router.post("/home", usersController.checkUser); // USED
router.get("/category/:userId", usersController.getUserCategories); // used, USED
router.put("/edit/:userId", usersController.updateUser); //USED

router.get("/", usersController.getAllUser);
router.get("/:userId/transaction", usersController.getAllTransaction);
router.get("/:userId/budget", usersController.getAllBudget);
router.get("/:userId/incomeexpense", usersController.getAllIncomeExpense);

module.exports = router;
