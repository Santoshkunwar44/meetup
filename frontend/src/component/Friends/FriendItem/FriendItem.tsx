import React, { MouseEvent, useEffect, useState } from 'react'
import { UserType } from '../../../utils/Types'
import { FriendItemWrapper } from './FriendItem.styles'
import { useNavigate } from 'react-router-dom'
import { State } from '../../../redux/reducers'
import { useDispatch, useSelector } from 'react-redux'
import { followUserApi } from '../../../utils/Api'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../redux'
import { Enums } from '../../../utils/Enums'

type FriendItemPropsType={
  user:UserType,
  chat?:boolean
}
const FriendItem:React.FC<FriendItemPropsType> = ({user,chat}) => {
  const navigate = useNavigate();

  const { user:loggedInUser } = useSelector((state: State) => state.user);
  const {  socket } = useSelector((state: State) => state.app);
  const [hasIFollowed, setHasIFollowed] = useState<boolean | null>(null);
  const [hasTheyFollowed, setHasTheyFollowed] = useState<boolean | null>(null);
  const dispatch =useDispatch()
  const {refreshAction} = bindActionCreators(actionCreators,dispatch)





  
  useEffect(() => {
    if(!loggedInUser || !user._id)return;
    // Check if the logged-in user follows the displayed user
    setHasIFollowed(loggedInUser.followings?.some(u=>u._id===user._id));
    // Check if the displayed user follows the logged-in user
    setHasTheyFollowed(user.followings?.some(u=>u._id===loggedInUser._id))
  }, [loggedInUser, user]);

 
  const handleFollow = async (e:MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()



      if(!loggedInUser?._id)return;
      let payload = {
        type:Enums.FOLLOW_TYPE,
        from:loggedInUser?._id,
        to:user._id
      }
      try {

       const {status,data}  = await followUserApi(loggedInUser?._id,user._id,payload)
       if(status===200){
        socket.emit(Enums.NOTIFICATION,{...data,nextUser:user._id})
        setHasIFollowed(true)
        refreshAction()
       }
      } catch (error) {
        console.log(error)
      }
  };

  const handleClick = () => {
    // Handle click logic, e.g., navigate to user profile
    if(chat){
      navigate(`${user?._id}`);
    }else{
      navigate(`/profile/${user?._id}`);
    }
  };


  const renderButton = () => {


    if (hasIFollowed === null || hasTheyFollowed === null) {
      // Loading state or error state
      return <button disabled>Loading...</button>;
    }
    if (!hasIFollowed && !hasTheyFollowed) {
      // Neither follows each other
      return <button onClick={handleFollow}>Follow</button>;
    } else if (hasIFollowed && !hasTheyFollowed) {
      
      // Logged-in user follows, but displayed user doesn't follow back
      return <button disabled>Following</button>; // You can handle an unfollow logic here
    } else if (!hasIFollowed && hasTheyFollowed) {
      // Displayed user follows, but logged-in user doesn't follow back
      return <button onClick={handleFollow}>Follow Back</button>;
    } else {
      // Both follow each other
      return <button disabled>Friends</button>;
    }


  };



  return (
    <FriendItemWrapper onClick={handleClick}>
        <div className="leftItem">
        <img src={user?.image} alt="userProfile" />
        <div className="userInfo">
            <h3 className='username'>{`${user?.firstName} ${user?.lastName}`}</h3>
            <p className='followersCount'>{user?.followers?.length ?? 0 } Followers</p>
        </div>
        </div>
       { !chat && renderButton()}
    </FriendItemWrapper>
  )
}

export default FriendItem