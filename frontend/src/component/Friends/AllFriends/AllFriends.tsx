import { FaUsers } from 'react-icons/fa'
import { AllFriendsWrapper } from './AllFriends.styles'

const AllFriends = () => {
  return (
    <AllFriendsWrapper>
       <div className="friendHeader">
           <FaUsers/>
         <h1 className='headerTitle'>Suggested People</h1>

        </div> 
        <div className="friendsWrapper">
         
        </div>
    </AllFriendsWrapper>
  )
}

export default AllFriends