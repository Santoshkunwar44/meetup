import React, { useState } from 'react'
import { SuggestedItemWrapper } from './SuggestedItem.styles'
import { UserType } from '../../../utils/Types'
import { useNavigate } from 'react-router-dom'
import { followUserApi } from '../../../utils/Api'
import { useSelector } from 'react-redux'
import { State } from '../../../redux/reducers'
type suggestedPropsType={
    user:UserType
}
const SuggestedItem:React.FC<suggestedPropsType> = ({user}) => {
  const {user:loggedInUser} = useSelector((state:State)=>state.user)
  const [followed,setFollowed] = useState(false)





  const navigate = useNavigate()

  const  handleClick=()=>{
    navigate(`/profile/${user._id}`)
  }

  const handleFollow=async(e:React.MouseEvent<HTMLButtonElement>)=>{

    if(!user?._id|| !loggedInUser?._id)return;
    e.stopPropagation()
    try {
      const {status} = await followUserApi(loggedInUser?._id,user?._id)
      if(status===200){
        setFollowed(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SuggestedItemWrapper onClick={handleClick}>
            <img src={user.image} alt="" />
            <div className="infoBox">
            <h4 className='username'>{user.firstName} {user.lastName}</h4>
            <button onClick={handleFollow}>{followed?"Following":"Follow"}</button>
            </div>
    </SuggestedItemWrapper>
  )
}

export default SuggestedItem