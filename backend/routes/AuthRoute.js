const { registerUser, loginUser, UserLogout } = require("../controller/AuthController")



const router = require("express").Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/logout", UserLogout)
router.post("/email_confirmation/:token",handleConfirmation);
router.post("/sent_verification_link",sendEmailToVerifyAccount)
router.post("/sent_emai_reset_password",sentLinkToResetPassword)
router.post("/reset_password",resetPassword)

module.exports = router