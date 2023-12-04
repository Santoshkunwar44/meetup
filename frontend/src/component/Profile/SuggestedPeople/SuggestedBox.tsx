import { useEffect, useState } from 'react'
import { SuggestedWrapper } from './SuggestedBox.styles'
import { getSuggestedPeopleApi } from '../../../utils/Api'
import { UserType } from '../../../utils/Types'
import { useSelector } from 'react-redux'
import { State } from '../../../redux/reducers'
import SuggestedItem from '../SuggestedItem/SuggestedItem'

const SuggestedBox = () => {

    const [ suggedtedUsers,setSuggestedUsers ] = useState<UserType[] | null>(null)
    const {user} =useSelector((state:State)=>state.user)



     useEffect(()=>{
    fetchSuggestedPeople()
  },[])

  const fetchSuggestedPeople=async()=>{
    if(!user?._id)return;
    try {
       const {data,status} = await getSuggestedPeopleApi(user?._id)
       if(status===200){
        setSuggestedUsers(data.message)
       }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SuggestedWrapper> 
        <div className="headerBox">
            <h4 className='headerTitle'>People you may know  </h4>
        </div>
        <div className="suggestedPeopleWrapper">
                {
                    suggedtedUsers && suggedtedUsers.map(user=><SuggestedItem key={user._id} user={user}/>)
                }
        </div>
    </SuggestedWrapper>
  )
}

export default SuggestedBox