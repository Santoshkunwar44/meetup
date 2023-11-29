import { SearchUserWrapper } from './SearchUser.styles'
import FriendItem from '../FriendItem/FriendItem'
import { TbUserSearch } from "react-icons/tb";


const SearchUser = () => {
  return (
    <SearchUserWrapper>
          <div className="friendHeader">
           <TbUserSearch/>
           
            <input type="text" placeholder='search user'/>

        </div> 
        <div className="friendsWrapper">
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
            <FriendItem/>
        </div>
    </SearchUserWrapper>
  )
}

export default SearchUser