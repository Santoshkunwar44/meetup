const {  searchUser, updateUser, getLoggedInUser, followerUser, unfollowUser, suggestionUser } = require("../controller/UserController")


const router = require("express").Router()

router.get("/loggedInUser", getLoggedInUser)
router.put("/:userId", updateUser)
router.get("/search", searchUser)
router.post("/follow", followerUser)
router.post("/unfollow", unfollowUser)
router.get("/suggestion/:userId",suggestionUser)



module.exports = router

