import { Outlet } from 'react-router-dom'
import FriendsSidebar from '../FriendsSidebar/FriendsSidebar'
import { FriendsOutletWrapper } from './FriendsOutlet.styles'

const FriendsOutlet = () => {
  return (
    <FriendsOutletWrapper>
        <FriendsSidebar/>
        <Outlet/>
    </FriendsOutletWrapper>
  )
}

export default FriendsOutlet