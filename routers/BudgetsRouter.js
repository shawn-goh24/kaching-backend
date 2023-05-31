const express = require("express");
const budgetController = require("../controllers/BudgetsController");

const router = express.Router();

router.get("/:userId/:month/:year", budgetController.getAllBudget);
router.post("/add", budgetController.addBudget);
router.put("/edit/:budgetId", budgetController.editBudget);
router.delete("/delete/:budgetId", budgetController.deleteBudget);

module.exports = router;
