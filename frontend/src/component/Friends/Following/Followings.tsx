import { RiUserHeartLine } from "react-icons/ri"
import { FollowingsWrapper } from "./Followings.styles"
import FriendItem from "../FriendItem/FriendItem"
import { useState } from "react"

const Followings = () => {
    const [followings,setFollowings] = useState()
    
  return (
    <FollowingsWrapper>
         <div className="friendHeader">
           <RiUserHeartLine/>
         <h1 className='headerTitle'> Followings</h1>
        </div> 
        <div className="friendsWrapper">
            
        </div>
    </FollowingsWrapper>
  )
}

export default Followings