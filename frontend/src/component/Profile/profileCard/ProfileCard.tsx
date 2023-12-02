import { useSelector } from 'react-redux'
import { ProfileCardWrapper } from './ProfileCard.styles'
import { State } from '../../../redux/reducers'
import { UserType } from '../../../utils/Types'
type ProfileCardPropsType={
    user:UserType|null
}
const ProfileCard:React.FC<ProfileCardPropsType> = ({user}) => {

  return (
    <ProfileCardWrapper>
        <div className="cardContent">
            <div className="leftBox">
                <img className='profileImage' src={user?.image} alt="profileImage" />
            </div>
            <div className="rightBox">
                <div className="topBox">
                    <h1 className="userName">{user?.firstName} {user?.lastName}</h1>
                    <button>{user?.followings?.length}  Followings </button>
                </div>
                <div className="topBox">
                    <h1 className="userName">{user?.firstName}</h1>
                    <button>{user?.followers?.length}  Followers </button>
                </div>

            </div>
            <p>{user?.email}</p>
            <p>Oneday i will be the inspiration of millions of people</p>
        </div>
    </ProfileCardWrapper>
  )
}

export default ProfileCard