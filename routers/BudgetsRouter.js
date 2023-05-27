const express = require("express");
const budgetController = require("../controllers/BudgetsController");

const router = express.Router();

// Get all budget - USED
router.get("/:userId/:month/:year", budgetController.getAllBudget);

router.post("/add", budgetController.addBudget); //USED

// Edit category - USED
router.put("/edit/:budgetId", budgetController.editBudget);

// Delete category - USED
router.delete("/delete/:budgetId", budgetController.deleteBudget);

module.exports = router;
