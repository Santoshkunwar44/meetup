import { FollowersWrapper } from './Followers.styles'
import { RiUserVoiceLine } from 'react-icons/ri'

const Followers = () => {
  return (
    <FollowersWrapper>
       <div className="friendHeader">
               <RiUserVoiceLine/>
         <h1 className='headerTitle'>Followers </h1>

        </div> 
        <div className="friendsWrapper">
         
        </div>
    </FollowersWrapper>
  )
}

export default Followers