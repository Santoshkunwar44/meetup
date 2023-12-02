import { useSelector } from 'react-redux';
import { FollowersWrapper } from './Followers.styles'
import { RiUserVoiceLine } from 'react-icons/ri'
import { State } from '../../../redux/reducers';
import FriendItem from '../FriendItem/FriendItem';

const Followers = () => {
  const {user} = useSelector((state:State)=>state.user)   ;

  return (
    <FollowersWrapper>
       <div className="friendHeader">
               <RiUserVoiceLine/>
         <h1 className='headerTitle'>Followers </h1>

        </div> 
        <div className="friendsWrapper">
          {
            user?.followers?.map((person)=>{
              return <FriendItem key={person._id} user={person}/>
            })
          }
        </div>
    </FollowersWrapper>
  )
}

export default Followers