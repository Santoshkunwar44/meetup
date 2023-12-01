import React from 'react'
import { UserType } from '../../../utils/Types'
import { FriendItemWrapper } from './FriendItem.styles'
import { useNavigate } from 'react-router-dom'
type FriendItemPropsType={
  user:UserType,
  chat:boolean
}
const FriendItem:React.FC<FriendItemPropsType> = ({user,chat}) => {
  const navigate = useNavigate()
  const handleClick=()=>{
    if(chat){
      navigate(`${user._id}`)
    }
  }
  return (
    <FriendItemWrapper onClick={handleClick}>
        <div className="leftItem">

        <img src={user.image} alt="userProfile" />
        <div className="userInfo">
            <h3 className='username'>{`${user.firstName} ${user.lastName}`}</h3>
            <p className='followersCount'>274 Followers</p>
        </div>
        </div>
       { !chat && <button>Follow </button>}
    </FriendItemWrapper>
  )
}

export default FriendItem