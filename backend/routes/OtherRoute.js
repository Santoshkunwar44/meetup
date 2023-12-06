const { getStatsOfUser } = require("../controller/OtherController");
const router = require("express").Router()

router.get("/userStats/:userId",getStatsOfUser);




module.exports = router;
