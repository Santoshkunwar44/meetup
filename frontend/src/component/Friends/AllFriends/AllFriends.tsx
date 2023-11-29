import { FaUsers } from 'react-icons/fa'
import { AllFriendsWrapper } from './AllFriends.styles'
import FriendItem from '../FriendItem/FriendItem'

const AllFriends = () => {
  return (
    <AllFriendsWrapper>
       <div className="friendHeader">
           <FaUsers/>
         <h1 className='headerTitle'>Suggested People</h1>

        </div> 
        <div className="friendsWrapper">
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
        </div>
    </AllFriendsWrapper>
  )
}

export default AllFriends