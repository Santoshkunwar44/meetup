import { FaUsers } from 'react-icons/fa'
import { AllFriendsWrapper } from './AllFriends.styles'
import { useEffect, useState } from 'react'
import { getSuggestedPeopleApi } from '../../../utils/Api'
import { UserType } from '../../../utils/Types'
import { useSelector } from 'react-redux'
import { State } from '../../../redux/reducers'
import FriendItem from '../FriendItem/FriendItem'

const AllFriends = () => {

  const [people,setPeople] = useState<UserType[] |null>(null)
  const {user} = useSelector((state:State)=>state.user)



  useEffect(()=>{
    fetchSuggestedPeople()
  },[])

  const fetchSuggestedPeople=async()=>{
    if(!user?._id)return;
    try {
       const {data,status} = await getSuggestedPeopleApi(user?._id)
       if(status===200){
        setPeople(data.message)
       }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AllFriendsWrapper>
       <div className="friendHeader">
           <FaUsers/>
         <h1 className='headerTitle'>Suggested People</h1>

        </div> 
        <div className="friendsWrapper">
          {
            people?.map((person:UserType)=>{
              return <FriendItem key={person._id} user={person}/>
            })
          }
        </div>
    </AllFriendsWrapper>
  )
}

export default AllFriends