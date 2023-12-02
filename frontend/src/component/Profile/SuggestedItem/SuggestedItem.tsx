import React from 'react'
import { SuggestedItemWrapper } from './SuggestedItem.styles'
import { UserType } from '../../../utils/Types'
type suggestedPropsType={
    user:UserType
}
const SuggestedItem:React.FC<suggestedPropsType> = ({user}) => {

  return (
    <SuggestedItemWrapper>
            <img src={user.image} alt="" />
            <div className="infoBox">
            <h4 className='username'>{user.firstName} {user.lastName}</h4>
            <button>Follow</button>
            </div>
    </SuggestedItemWrapper>
  )
}

export default SuggestedItem