import { useEffect, useState } from 'react';
import { searchUserByUsernameApi } from '../../../utils/Api';
import { SearchUserWrapper } from './SearchUser.styles'
import { TbUserSearch } from "react-icons/tb";
import FriendItem from '../FriendItem/FriendItem';
import { UserType } from '../../../utils/Types';
import { useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';
import UserSkeleton from '../../skeleton/UserSkeleton/UserSkeleton';


const SearchUser = () => {

  const [searchInput,setsearchInput] = useState("");
  const {user} =  useSelector((state:State)=>state.user)
  const [users,setUsers] = useState<UserType[]>([])
  const [loading,setLoading] =useState(false)




  useEffect(()=>{
    fetchUserByUsername()
  },[searchInput])


  const fetchUserByUsername=async()=>{
    try {
      setLoading(true)
      const {data,status } = await searchUserByUsernameApi(searchInput)
      if(status===200){
        let allUsers:UserType[] = data.message;
        let filter = allUsers.filter(u=>u._id !==user?._id)
        setUsers(filter)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }



  return (
    <SearchUserWrapper>
          <div className="friendHeader">
           <TbUserSearch/>
           
            <input type="text" placeholder='search user' onChange={e=>setsearchInput(e.target.value)}/>

        </div> 
        <div className="friendsWrapper">
            {
            loading ?<UserSkeleton/>: searchInput.length>0 &&  users.map(user=><FriendItem key={user._id} user={user}/>)
            }
        </div>
    </SearchUserWrapper>
  )
}

export default SearchUser