const express = require("express");
const billController = require("../controllers/BillsController");

const router = express.Router();

router.get("/:userId", billController.getBills); //USED
router.post("/new", billController.addBill); //USED
router.put("/:userId/:billId", billController.editBill); //USED
router.delete("/:userId/:billId", billController.deleteBill); //USED

module.exports = router;
