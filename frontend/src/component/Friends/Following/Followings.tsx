import { RiUserHeartLine } from "react-icons/ri"
import { FollowingsWrapper } from "./Followings.styles"
import FriendItem from "../FriendItem/FriendItem"
import { useSelector } from "react-redux"
import { State } from "../../../redux/reducers"

const Followings = () => {
    const {user} = useSelector((state:State)=>state.user)   ;
     
  return (
    <FollowingsWrapper>
         <div className="friendHeader">
           <RiUserHeartLine/>
         <h1 className='headerTitle'> Followings</h1>
        </div> 
        <div className="friendsWrapper">

          {
            user?.followings?.map((person)=>{
              return <FriendItem key={person._id} user={person}/>
            })
          }
            
        </div>
    </FollowingsWrapper>
  )
}

export default Followings