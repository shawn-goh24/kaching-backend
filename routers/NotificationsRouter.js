const express = require("express");
const notificationController = require("../controllers/NotificationsController");

const router = express.Router();

router.get("/:userId", notificationController.getNotifications); // USED, USED
router.post("/new", notificationController.addNotification); //
router.put("/:userId/:notificationId", notificationController.editNotification); // USED
router.delete(
  "/:userId/:notificationId",
  notificationController.deleteNotification
); // USED

module.exports = router;
