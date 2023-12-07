const { createNotification, getNotificationOfUser, markAsSeen } = require("../controller/NotificationController")

const router = require("express").Router();
router.post("/create",createNotification);
router.get("/:userId",getNotificationOfUser);
router.post("/mark_as_seen/:userId",markAsSeen);

module.exports = router;

