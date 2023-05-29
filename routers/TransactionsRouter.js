const express = require("express");
const transactionController = require("../controllers/TransactionsController");

const router = express.Router();

// Get transactions from a user for the year - USED
router.get("/:userId/:year", transactionController.getYearlyTransactions); //should change to query????

// Get transactions from a user for the month // USED
router.get(
  "/:userId/:month/:year",
  transactionController.getTransactionForMonth //should change to query???
);

// Add transaction - USED
router.post("/add", transactionController.addTransaction);

// Edit transaction - USED
router.put(
  "/edit/:userId/:transactionId/:month/:year",
  transactionController.editTransaction
);

// Delete transaction - USED
router.delete(
  "/delete/:userId/:transactionId/:month/:year",
  transactionController.deleteTransaction
);

module.exports = router;
