import { RiUserHeartLine } from "react-icons/ri"
import { FollowingsWrapper } from "./Followings.styles"
import FriendItem from "../FriendItem/FriendItem"

const Followings = () => {
  return (
    <FollowingsWrapper>
         <div className="friendHeader">
           <RiUserHeartLine/>
         <h1 className='headerTitle'> Followings</h1>
        </div> 
        <div className="friendsWrapper">
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
        </div>
    </FollowingsWrapper>
  )
}

export default Followings