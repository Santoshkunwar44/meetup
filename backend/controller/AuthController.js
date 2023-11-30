const { hashPassword, comparePassword } = require("../services/AuthService");
const UserModal = require("../model/User");
const EmailService = require("../services/EmailService");

class AuthController {
     async registerUser(req, res) {
        const { password: inputPassword ,email} = req.body
        try {
            const hashed_password = await hashPassword(inputPassword)
            req.body.password = hashed_password;
            req.body.lastLoggedIn = Date.now()
            const savedUser = await UserModal.create(req.body);
            await  EmailService.sentConfirmationEmail(email)
            const { password, ...others } = savedUser._doc;
            let userData = {
                ...others,
            }
            req.session.user = userData; // Auto saves session data in mongo store
            return res.status(200).json({ message: userData, success: true })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: error.message, success: false })
        }
    }
    async loginUser(req, res) {
        const { password: user_password, email } = req.body
        console.log("logggin")
        try {
            const user = await UserModal.findOne({ email })
            if (!user)  throw Error("This email is not registered in Meetup")
            const { password, ...others } = user._doc;
            const isValid = await comparePassword(user_password, password)
            if (!isValid) throw Error("Invalid Credentials")
            await UserModal.findByIdAndUpdate(others._id, {
                lastLoggedIn: Date.now()
            })
            let userData = {
                ...others,
                lastLoggedIn: Date.now()
            }
            req.session.user = userData; // Auto saves session data in mongo store
            return res.status(200).json({ message: userData, success: true }) // sends cookie with sessionID automatically in response
        } catch (error) {
            // console.log(error)
            res.status(500).send({ message: error.message, success: false })
        }
    }

    async UserLogout(req, res) {
        try {
            req.session.destroy((err) => {
                //delete session data from store, using sessionID in cookie
                if (err) throw err;
                res.clearCookie("meetup.sid"); // clears cookie containing expired sessionID
                res.status(200).json({
                    message: "Logged out successfully", success: true
                });
            });
        } catch (error) {
            res.status(500).json({ message: error, success: false })
        }
    }
}
module.exports = new AuthController()
