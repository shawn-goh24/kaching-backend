const express = require("express");
const notificationController = require("../controllers/NotificationsController");

const router = express.Router();

router.get("/:userId", notificationController.getNotifications);
router.put("/:userId/:notificationId", notificationController.editNotification);
router.delete(
  "/:userId/:notificationId",
  notificationController.deleteNotification
);

module.exports = router;
