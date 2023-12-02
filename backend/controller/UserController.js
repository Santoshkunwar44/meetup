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
                        { firstName: { $regex: req.query.search_query, $options: "i" } },
                        { lastName: { $regex: req.query.search_query, $options: "i" } },
                    ]
                } : {}

            } else {
                keyword = { _id: userId }
            }
            const fetchedUser = await UserModal.find(keyword).populate(["followings","followers"])
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
     async followerUser(req, res) {
  //check is the current user and the next user is not same | the user cannot follow thyself
    const {userId,nextUserId} = req.query;
        if (userId !==nextUserId) {
    try {
      //fetch the document of an current user and the next user
      const user = await UserModal.findById(nextUserId);
      const currUser = await UserModal.findById(userId);

      //check if the current user already follows the user |
      if (!user.followers.includes(currUser._id)) {
        // push the currUser's id in the followers array of the user's document
        await user.updateOne({ $push: { followers: currUser._id } });
        // push the user's id in the followings  array of the current user's document
        await currUser.updateOne({ $push: { followings: user._id } });
        return res
          .status(200)
          .send({ success: true, message: "Successfully followed" });
      } else {
        res.status(401).send("You have already followed this user");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(401).send("You cannot follow yourself");
  }
    }

    async unfollowUser(req,res){
        const {userId,nextUserId} = req.query;
         if (userId !==nextUserId) {
    try {
      //fetch the document of an current user and the next user
      const user = await UserModal.findById(nextUserId);
      const currUser = await UserModal.findById(userId);

      //check if the current user already follows the user |
      if (user.followers.includes(currUser._id)) {
        // push the currUser's id in the followers array of the user's document
        await user.updateOne({ $pull: { followers: currUser._id } });
        // push the user's id in the followings  array of the current user's document
        await currUser.updateOne({ $pull: { followings: user._id } });
        return res
          .status(200)
          .send({ success: true, message: "Successfully unfollowed" });
      } else {
        res.status(401).send("You have not followed  this user to unfollow");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(401).send("You cannot unfollow yourself");
  }
    }

    async suggestionUser(req,res){
        const {userId}   = req.params;
        try {

            const suggestionUser  = await UserModal.find({
                _id:{
                    $ne:userId
                }
            }).populate(["followings","followers"])

            res.status(200).send({message:suggestionUser,success:true});
            
        } catch (error) {
            console.log(error)
            res.status(500).json({message:error.message,success:false});
        }
    }

}
module.exports = new UserController()
