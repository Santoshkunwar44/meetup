import { ProfileCardWrapper } from './ProfileCard.styles'
import { UserType } from '../../../utils/Types'
import { SlOptionsVertical } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux';
import { followUserApi } from '../../../utils/Api';
import { Enums } from '../../../utils/Enums';

type ProfileCardPropsType={
    user:UserType|null
}
const ProfileCard:React.FC<ProfileCardPropsType> = ({user}) => {

  const {user:loggedInUser } = useSelector((state:State)=>state.user)
  const {socket} = useSelector((state:State)=>state.app)
  const [hasIFollowed, setHasIFollowed] = useState<boolean | null>(null);
  const [hasTheyFollowed, setHasTheyFollowed] = useState<boolean | null>(null);
  const dispatch =useDispatch()
  const {refreshAction} = bindActionCreators(actionCreators,dispatch)


  
  useEffect(() => {
    if(!loggedInUser || !user?._id)return;
    // Check if the logged-in user follows the displayed user
    setHasIFollowed(loggedInUser.followings?.some(u=>u._id===user._id));
    // Check if the displayed user follows the logged-in user
    setHasTheyFollowed(user.followings?.some(u=>u._id===loggedInUser._id))
  }, [loggedInUser, user]);

    const handleFollow = async (type:"FOLLOW"|"FOLLOW_BACK") => {

      if(!loggedInUser?._id || !user?._id)return;

        let payload = {
        type,
        from:loggedInUser?._id,
        to:user._id
      }
      try {
       const {status,data}  = await followUserApi(loggedInUser?._id ,user._id ,payload)
       if(status===200){
         socket?.emit(Enums.NOTIFICATION,{...data.message,nextUser:user._id})
        setHasIFollowed(true)
        refreshAction()
       }
      } catch (error) {
        console.log(error)
      }
  };



 const renderButton = () => {
    if (hasIFollowed === null || hasTheyFollowed === null) {
      // Loading state or error state
      return <button disabled>Loading...</button>;
    }

    if (!hasIFollowed && !hasTheyFollowed) {
      // Neither follows each other
      return <button onClick={()=>handleFollow("FOLLOW")}>Follow</button>;
    } else if (hasIFollowed && !hasTheyFollowed) {
      
      // Logged-in user fol lows, but displayed user doesn't follow back
      return <button disabled>Following</button>; // You can handle an unfollow logic here
    } else if (!hasIFollowed && hasTheyFollowed) {
      // Displayed user follows, but logged-in user doesn't follow back
      return <button onClick={()=>handleFollow("FOLLOW_BACK")}>Follow Back</button>;
    } else {
      // Both follow each other
      return <button disabled>Friends</button>;
    }
  };


  return (
    <ProfileCardWrapper>
        <div className="cardContent">
            <div className="leftBox">
                <img className='profileImage' src={user?.image} alt="profileImage" />
            </div>
            <div className="rightBox">
                <div className="topBox">
                    <h1 className="userName">{user?.firstName} {user?.lastName}</h1>
                    { user?._id !== loggedInUser?._id && <>
                        {renderButton()}
                        <Link to={`/chat/${user?._id}`}>
                        <button className='MessageButton'>Message</button>
                        </Link>

                        <SlOptionsVertical/>
                    </>
                         }
                    
                </div>

            <div className="followBox">
                 <button className='followingButton'>{user?.followings?.length}  Followings </button>
                <button className='followersButton'>{user?.followers?.length}  Followers </button>
            </div>
          

            <p className='profileEmail'>{user?.email}</p>
            <p className='bioDetails'>Oneday i will be the inspiration of millions of people</p>
        {
                user?._id !== loggedInUser?._id &&  <p className='mutualFriends'>Followed by <b className='muttualName'>_rajiv@stha _hana21Guns</b> </p>
        }   
            </div>
        </div>
    </ProfileCardWrapper>
  )
}

export default ProfileCard