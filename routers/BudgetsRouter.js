const express = require("express");
const budgetController = require("../controllers/BudgetsController");

const router = express.Router();

// Get all budget
router.get("/", budgetController.getAllBudget);
// Edit category
// router.put("/edit/:categoryId", budgetController.editBudget);
// Delete category
// router.delete("/delete/:categoryId", budgetController.deleteBudget);

module.exports = router;
