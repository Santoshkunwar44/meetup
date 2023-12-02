import { ProfileCardWrapper } from './ProfileCard.styles'
import { UserType } from '../../../utils/Types'
import { SlOptionsVertical } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';

type ProfileCardPropsType={
    user:UserType|null
}
const ProfileCard:React.FC<ProfileCardPropsType> = ({user}) => {

    const {user:loggedInUser } = useSelector((state:State)=>state.user)





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
                        <button className='followingButton'>Follow</button>
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
            <p className='mutualFriends'>Followed by <b className='muttualName'>_rajiv@stha _hana21Guns</b> </p>
            </div>
        </div>
    </ProfileCardWrapper>
  )
}

export default ProfileCard