const {  searchUser, updateUser, getLoggedInUser } = require("../controller/Usercontroller")

const router = require("express").Router()

router.get("/loggedInUser", getLoggedInUser)
router.put("/:userId", updateUser)
router.get("/search", searchUser)

module.exports = router

