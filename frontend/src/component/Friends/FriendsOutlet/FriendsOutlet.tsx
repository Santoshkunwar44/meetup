import { Outlet } from 'react-router-dom'
import FriendsSidebar from '../FriendsSidebar/FriendsSidebar'
import { FriendsOutletWrapper } from './FriendsOutlet.styles'
import SearchUser from '../SearchUser/SearchUser'

const FriendsOutlet = () => {
  return (
    <FriendsOutletWrapper>
        <FriendsSidebar/>
        <Outlet/>
        <SearchUser/>
    </FriendsOutletWrapper>
  )
}

export default FriendsOutlet