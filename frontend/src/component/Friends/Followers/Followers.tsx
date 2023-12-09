import { useSelector } from 'react-redux';
import { FollowersWrapper } from './Followers.styles'
import { State } from '../../../redux/reducers';
import FriendItem from '../FriendItem/FriendItem';
import { useEffect, useState } from 'react';
import { getFollowersApi } from '../../../utils/Api';
import { UserType } from '../../../utils/Types';

const Followers = () => {
  const {user} = useSelector((state:State)=>state.user)   ;
  const [followersData,setFollowersData] =useState<UserType[]>([])



  useEffect(()=>{
    fetchMyFollowers()
  },[user])


  const fetchMyFollowers=async()=>{
    if(!user?._id)return;

    try {
       const {status,data} =  await getFollowersApi(user?._id)
       if(status===200){
        setFollowersData(data.message)
       }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FollowersWrapper>
       {/* <div className="friendHeader">
               <RiUserVoiceLine/>
         <h1 className='headerTitle'>Followers </h1>

        </div>  */}
        <div className="friendsWrapper">
          {
            followersData?.map((person)=>{
              return <FriendItem key={person._id} user={person}/>
            })
          }
        </div>
    </FollowersWrapper>
  )
}

export default Followers