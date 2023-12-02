import { SidebarWrapper } from './Sidebar.styles'
import { TbBrandMessenger } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { State } from '../../redux/reducers';
import { TbLogout2 } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";



const Sidebar = () => {
  const {user} = useSelector((state:State)=>state.user)
  return (
    <SidebarWrapper>
        <div className="sidebarList">
          <div className="sidebarItem">
            <TbBrandMessenger className="sidebarIcon"/>
            <span>Messenger</span>
          </div>
          <div className="sidebarItem">
            <LuUsers2 className="sidebarIcon"/>
            <span>Friends</span>
          </div>
          <div className="sidebarItem">
            <IoSearch className="sidebarIcon"/>
            <span>Search</span>
          </div>
      
          <div className="sidebarItem">
            <img className='profileImage' src={user?.image} alt="" />
            <span>Profile</span>
          </div>
        </div>
        <div className="logoutBtn">
            <TbLogout2/>
            <span>Logout</span>
        </div>
    </SidebarWrapper>
  )
}

export default Sidebar