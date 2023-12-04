import React, { useEffect, useState } from 'react'
import { SuggestedItemWrapper } from './SuggestedItem.styles'
import { UserType } from '../../../utils/Types'
import { useNavigate } from 'react-router-dom'
import { followUserApi } from '../../../utils/Api'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../../redux/reducers'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../redux'
type suggestedPropsType={
    user:UserType
}
const SuggestedItem:React.FC<suggestedPropsType> = ({user}) => {
  const {user:loggedInUser} = useSelector((state:State)=>state.user)





  const navigate = useNavigate()




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

    const handleFollow = async () => {
      if(!loggedInUser?._id || !user?._id)return;
      try {
       const {status}  = await followUserApi(loggedInUser?._id,user._id)
       if(status===200){
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