const { createNotification } = require("../controller/NotificationController")
const {  searchUser, updateUser, getLoggedInUser, followerUser, unfollowUser, suggestionUser, getUsersFollowersAndFollowings } = require("../controller/UserController")


const router = require("express").Router()

router.get("/loggedInUser", getLoggedInUser)
router.put("/:userId", updateUser)
router.get("/search", searchUser)
router.post("/follow", followerUser,createNotification)
router.post("/unfollow", unfollowUser)
router.get("/suggestion/:userId",suggestionUser)
router.get("/friend/:userId",getUsersFollowersAndFollowings)



module.exports = router

