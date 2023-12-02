import { useEffect, useState } from 'react';
import { searchUserByUsernameApi } from '../../../utils/Api';
import { SearchUserWrapper } from './SearchUser.styles'
import { TbUserSearch } from "react-icons/tb";
import FriendItem from '../FriendItem/FriendItem';
import { UserType } from '../../../utils/Types';
import { useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';


const SearchUser = () => {

  const [searchInput,setsearchInput] = useState("");
  const {user} =  useSelector((state:State)=>state.user)
  const [users,setUsers] = useState<UserType[]>([])


  useEffect(()=>{
    fetchUserByUsername()
  },[searchInput])


  const fetchUserByUsername=async()=>{
    try {
      const {data,status } = await searchUserByUsernameApi(searchInput)
      if(status===200){
        let allUsers:UserType[] = data.message;
        let filter = allUsers.filter(u=>u._id !==user?._id)
        setUsers(filter)
      }
    } catch (error) {
      console.log(error)
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
             searchInput.length>0 &&  users.map(user=><FriendItem key={user._id} user={user}/>)
            }
        </div>
    </SearchUserWrapper>
  )
}

export default SearchUser