const UserModal = require("../model/User")
const { hashPassword, comparePassword, isUserUpdated } = require("../services/AuthService")


class UserController {


   
    async getLoggedInUser(req, res) {

        const sessionUser = req.session?.user;
        try {
          if (sessionUser) {
            let updatedUser = await isUserUpdated(sessionUser)
            return res.status(200).json({ message: updatedUser, success: true })
          } else {
            throw Error("You are not logged in")
          }
        } catch (error) {
          res.status(500).json({ message: error.message, success: false });
          
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
     async followerUser(req, res,next) {
  //check is the current user and the next user is not same | the user cannot follow thyself
      console.log("follow",req.body)


  
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

        next()
        
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
       const { userId } = req.params;

try {
    // Get user's followers and followings
    const user = await UserModal.findById(userId).populate(["followers followings"]);
    // let myFollowers= user.followers.map(followers=>followers._id.toString())
    let myFollowings= user.followings.map(following=>following._id.toString())


    let suggestedIds = [];

    // Add user's followings to suggestedIds
    

    // Add followers of user's followers to suggestedIds
    for (const follower of user.followers) {
        const followerUser = await UserModal.findById(follower._id).populate(["followers","followings"]);
        suggestedIds.push(...followerUser.followers.map((follower) => follower._id.toString()));
        suggestedIds.push(...followerUser.followings.map((following) => following._id.toString()));
    }
    for (const following of user.followings) {
        const followerUser = await UserModal.findById(following._id).populate(["followers","followings"]);
        suggestedIds.push(...followerUser.followers.map((follower) => follower._id.toString()));
        suggestedIds.push(...followerUser.followings.map((following) => following._id.toString()));
    }

    // Remove duplicates and exclude the user
    suggestedIds = Array.from(new Set(suggestedIds));
    suggestedIds = suggestedIds.filter((id) => id.toString() !== userId.toString());
    suggestedIds = suggestedIds.filter(suggested=>!myFollowings.some(following=>following === suggested));
    // console.log(myFollowings,suggestedIds)

    


    // Get suggested users
  const suggestedUsersMutual = await UserModal.aggregate([
    {
        $lookup: {
            from: "users",  // Replace "UserModal" with the actual name of your collection
            localField: "followings",
            foreignField: "_id",
            as: "followingDetails"
        }
    },
    {
        $lookup: {
            from: "users",  // Replace "UserModal" with the actual name of your collection
            localField: "followers",
            foreignField: "_id",
            as: "followerDetails"
        }
    },
    { 
        $project: { 
            _id: { $toString: "$_id" }, 
            firstName: 1, 
            lastName: 1, 
            image: 1, 
            followings: "$followingDetails",
            followers: "$followerDetails"
        } 
    },
    { $match: { _id: { $in: suggestedIds } } },
    { $sample: { size: 10 } },
]);


const excludedIds  = [userId,...suggestedIds , ...myFollowings]

console.log("excludedIds: ", suggestedIds ,suggestedUsersMutual)


const suggestedUsersRandom = await UserModal.aggregate([
    {
        $lookup: {
            from: "users",  // Replace "UserModal" with the actual name of your collection
            localField: "followings",
            foreignField: "_id",
            as: "followingDetails"
        }
    },
    {
        $lookup: {
            from: "users",  // Replace "UserModal" with the actual name of your collection
            localField: "followers",
            foreignField: "_id",
            as: "followerDetails"
        }
    },
    { 
        $project: { 
            _id: { $toString: "$_id" }, 
            firstName: 1, 
            lastName: 1, 
            image: 1, 
            followings: "$followingDetails",
            followers: "$followerDetails"
        } 
    },
    { $match: { _id: { $nin: excludedIds } } },
    { $sample: { size: 10 } },
]);
    res.status(200).json({ message: [...suggestedUsersRandom,...suggestedUsersMutual] ,success:true });

} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
}

}
}
module.exports = new UserController()
