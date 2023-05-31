const express = require("express");
const billController = require("../controllers/BillsController");

const router = express.Router();

router.get("/:userId", billController.getBills);
router.post("/new", billController.addBill);
router.put("/:userId/:billId", billController.editBill);
router.delete("/:userId/:billId", billController.deleteBill);

module.exports = router;
