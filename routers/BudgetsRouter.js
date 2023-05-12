const express = require("express");
const budgetController = require("../controllers/BudgetsController");

const router = express.Router();

// Get all budget
router.get("/:userId/:month/:year", budgetController.getAllBudget);
router.post("/add", budgetController.addBudget);
// Edit category
router.put("/edit/:budgetId", budgetController.editBudget);
// Delete category
router.delete("/delete/:budgetId", budgetController.deleteBudget);

module.exports = router;
