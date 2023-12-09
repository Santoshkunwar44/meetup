import React, { useEffect, useState } from 'react'
import { SuggestedItemWrapper } from './SuggestedItem.styles'
import { UserType } from '../../../utils/Types'
import { useNavigate } from 'react-router-dom'
import { followUserApi } from '../../../utils/Api'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../../redux/reducers'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../redux'
import { Enums } from '../../../utils/Enums'
type suggestedPropsType={
    user:UserType
}
const SuggestedItem:React.FC<suggestedPropsType> = ({user}) => {
  const {user:loggedInUser} = useSelector((state:State)=>state.user)
  const {socket} = useSelector((state:State)=>state.app)
  const [hasIFollowed, setHasIFollowed] = useState<boolean | null>(null);
  const [hasTheyFollowed, setHasTheyFollowed] = useState<boolean | null>(null);
  const dispatch =useDispatch()
  const {refreshAction} = bindActionCreators(actionCreators,dispatch)
  const navigate = useNavigate()


  
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
       const {status,data}  = await followUserApi(loggedInUser?._id,user._id,payload)
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
      
      // Logged-in user follows, but displayed user doesn't follow back
      return <button disabled>Following</button>; // You can handle an unfollow logic here
    } else if (!hasIFollowed && hasTheyFollowed) {
      // Displayed user follows, but logged-in user doesn't follow back
      return <button onClick={()=>handleFollow("FOLLOW_BACK")}>Follow Back</button>;
    } else {
      // Both follow each other
      return <button disabled>Friends</button>;
    }
  };


  const  handleClick=()=>{
    navigate(`/profile/${user._id}`)
  }

 
  return (
    <SuggestedItemWrapper onClick={handleClick}>
            <img src={user.image} alt="" />
            <div className="infoBox">
            <h4 className='username'>{user.firstName} {user.lastName}</h4>
            {renderButton()}
            </div>
    </SuggestedItemWrapper>
  )
}

export default SuggestedItem