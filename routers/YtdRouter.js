const express = require("express");
const ytdController = require("../controllers/YtdController");

const router = express.Router();

// get total YTD
router.get(
  "/total/:userId/:year/:incomeExpenseId",
  ytdController.getYtdTransactions
);

module.exports = router;
