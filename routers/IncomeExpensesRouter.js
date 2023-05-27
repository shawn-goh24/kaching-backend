const express = require("express");
const incomeExpenseController = require("../controllers/IncomeExpensesController");

const router = express.Router();

// Get all income expense - USED
router.get("/", incomeExpenseController.getAllIncomeExpense);

module.exports = router;
