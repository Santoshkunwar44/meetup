const UserModal = require("../model/User")
const { hashPassword, comparePassword, isUserUpdated } = require("../services/AuthService")


class UserController {


   
    async getLoggedInUser(req, res) {

        const sessionUser = req.session?.user;
        console.log(req.session)
        if (sessionUser) {

            let updatedUser = await isUserUpdated(sessionUser)
            return res.status(200).json({ message: updatedUser, success: true })
        } else {
            res.status(403).json({ message: "You are not logged ", success: false });
        }

    }
    async searchUser(req, res) {
        const { userId } = req.query
        let keyword = {}
        try {
            if (!userId) {

                keyword = req.query.search_query ? {
                    $or: [
                        { username: { $regex: req.query.search_query, $options: "i" } },
                        { email: { $regex: req.query.search_query, $options: "i" } },
                    ]
                } : {}

            } else {
                keyword = { _id: userId }
            }
            const fetchedUser = await UserModal.find(keyword)
            res.status(200).json({ message: fetchedUser, success: true })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error, success: false })
        }
    }
    async updateUser(req, res) {

        const { userId } = req.params;
        if (!userId) {
            throw new Error("userId is required")
        }
        try {
            const user = await UserModal.findById(userId)
            if (!user) return res.status(404).send({ message: "Invalid email address", success: false });
            if (req.body.password) {
                const hashed_password = await hashPassword(req.body.password)
                req.body.password = hashed_password
            }
            const updated = await UserModal.findByIdAndUpdate(userId, {
                $set: req.body
            }, {
                new: true
            })
            res.status(200).json({ message: updated, success: true })
        } catch (error) {
            res.status(500).json({ message: error.message, success: false })
        }
    }

}
module.exports = new UserController()
