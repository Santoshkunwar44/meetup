import { SidebarWrapper } from './Sidebar.styles'
import { TbBrandMessenger } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { State } from '../../redux/reducers';
import { TbLogout2 } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";
import { Link } from 'react-router-dom';



const Sidebar = () => {
  const {user} = useSelector((state:State)=>state.user)
  return (
    <SidebarWrapper>
        <div className="sidebarList">
          <Link className="sidebarItem" to={"/chat"}>
            <TbBrandMessenger className="sidebarIcon"/>
            <span>Messenger</span>
          </Link>
          <Link to={"/users"} className="sidebarItem">
            <LuUsers2 className="sidebarIcon"/>
            <span>Friends</span>
          </Link>
          <Link className="sidebarItem" to={"/users"}>
            <IoSearch className="sidebarIcon"/>
            <span>Search</span>
          </Link>
      
          <Link className="sidebarItem" to={`/profile/${user?._id}`}>
            <img className='profileImage' src={user?.image} alt="" />
            <span>Profile</span>
          </Link>
        </div>
        <div className="logoutBtn">
            <TbLogout2/>
            <span>Logout</span>
        </div>
    </SidebarWrapper>
  )
}

export default Sidebar