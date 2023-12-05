const { createNotification, getNotificationOfUser } = require("../controller/NotificationController")

const router = require("express").Router()

router.post("/create",createNotification);
router.get("/:userId",getNotificationOfUser);

module.exports = router;

