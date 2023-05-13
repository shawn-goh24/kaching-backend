const express = require("express");
const transactionController = require("../controllers/TransactionsController");

const router = express.Router();

// Get transactions from a user
router.get("/:userId", transactionController.getTransaction);
// Get transactions from a user for the year
router.get("/:userId/:year", transactionController.getYearlyTransactions);
// Get transactions from a user for the month
router.get(
  "/:userId/:month/:year",
  transactionController.getTransactionForMonth
);
// Add transaction
router.post("/add", transactionController.addTransaction);
// Edit transaction
router.put(
  "/edit/:userId/:transactionId/:month/:year",
  transactionController.editTransaction
);
// Delete transaction
router.delete(
  "/delete/:userId/:transactionId/:month/:year",
  transactionController.deleteTransaction
);

module.exports = router;
