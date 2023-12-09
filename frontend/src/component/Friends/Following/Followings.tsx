import { FollowingsWrapper } from "./Followings.styles"
import FriendItem from "../FriendItem/FriendItem"
import { useSelector } from "react-redux"
import { State } from "../../../redux/reducers"
import { useEffect, useState } from "react"
import { UserType } from "../../../utils/Types"
import { getFollowingsApi } from "../../../utils/Api"

const Followings = () => {
    const {user} = useSelector((state:State)=>state.user)   ;

     const [followingsData,setFollowingsData] =useState<UserType[]>([])



  useEffect(()=>{
    fetchMyFollowers()
  },[user])


  const fetchMyFollowers=async()=>{
    if(!user?._id)return;

    try {
       const {status,data} =  await getFollowingsApi(user?._id)
       if(status===200){
        setFollowingsData(data.message)
       }
    } catch (error) {
      console.log(error)
    }
  }

     
  return (
    <FollowingsWrapper>
         {/* <div className="friendHeader">
           <RiUserHeartLine/>
         <h1 className='headerTitle'> Followings</h1>
        </div>  */}
        <div className="friendsWrapper">

          {
            followingsData?.map((person)=>{
              return <FriendItem key={person._id} user={person}/>
            })
          }
            
        </div>
    </FollowingsWrapper>
  )
}

export default Followings