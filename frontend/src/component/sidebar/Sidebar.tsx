import React from 'react'
import { SidebarWrapper } from './Sidebar.styles'
import { FaFacebookMessenger } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { State } from '../../redux/reducers';
import { TbLogout2 } from "react-icons/tb";



const Sidebar = () => {
  const {user} = useSelector((state:State)=>state.user)
  return (
    <SidebarWrapper>
        <div className="sidebarList">
          <div className="sidebarItem">
            <FaFacebookMessenger className="sidebarIcon"/>
            <span>Messenger</span>
          </div>
          <div className="sidebarItem">
            <FaUserFriends className="sidebarIcon"/>
            <span>Friends</span>
          </div>
          <div className="sidebarItem">
            <IoSearch className="sidebarIcon"/>
            <span>Search</span>
          </div>
          <div className="sidebarItem">
            <FaFacebookMessenger className="sidebarIcon"/>
            <span>Messenger</span>
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