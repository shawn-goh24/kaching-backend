const express = require("express");
const transactionController = require("../controllers/TransactionsController");

const router = express.Router();

// Get transactions from a user
router.get("/:userId", transactionController.getTransaction);
// Add transaction
router.post("/add", transactionController.addTransaction);
// Edit transaction
router.put("/edit/:transactionId", transactionController.editTransaction);
// Delete transaction
router.delete(
  "/delete/:transactionId",
  transactionController.deleteTransaction
);

module.exports = router;
