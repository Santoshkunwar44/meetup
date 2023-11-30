const { registerUser, loginUser, UserLogout } = require("../controller/AuthController")



const router = require("express").Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/logout", UserLogout)

module.exports = router