import { SidebarWrapper } from './Sidebar.styles'
import { TbBrandMessenger } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { State } from '../../redux/reducers';
import { TbLogout2 } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { Badge } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';



type SidebarPropsType={
  small?:boolean|undefined
}
type pagePathType="chat"|"profile"|"users"|"search"|"notification"


const Sidebar:React.FC<SidebarPropsType> = ({small}) => {
  const {user} = useSelector((state:State)=>state.user)
  const navigate =useNavigate()
  const location = useLocation()

  const [currentpath,setCurrentPath] = useState<pagePathType>("profile");


  useEffect(()=>{
    const path = location.pathname.split("/")[1]
    const secondPatch = location.pathname.split("/")[2]
    if(path==="users"&& secondPatch==="search"){
      setCurrentPath("search")
    }else{
      if(path){
        setCurrentPath(path)
      }

    }
    

  },[location])


  const handleLogout=()=>{
    navigate("/auth/login")
  }

  return (
    <SidebarWrapper small={small}>
        <div className="sidebarList">
        
    

          <Link className={`${currentpath ==="chat" ? "activeSidebar":""} sidebarItem`} to={"/chat"}>
            <TbBrandMessenger className="sidebarIcon"/>
            <span>Messenger</span>
            <div className='badge'>2</div>
          </Link>
          <Link className={`${currentpath==="users" ?"activeSidebar":""} sidebarItem`} to={"/users"}>
            <LuUsers2 className="sidebarIcon"/>
            <span>Friends</span>
          </Link>
          <Link className={`${currentpath==="search"? "activeSidebar":""} sidebarItem`} to={"/users/search"}>
            <IoSearch className="sidebarIcon"/>
            <span>Search</span>
          </Link>
      
          <Link className={`${currentpath ==="notification" ?"activeSidebar":""} sidebarItem`} to={`/notification`}>
            <FaRegHeart className="sidebarIcon"/>
            <span>Notification</span>
                   <div className='badge'>5</div>
          </Link>
          <Link className={`${currentpath ==="profile" ?"activeSidebar":""} sidebarItem`} to={`/profile/${user?._id}`}>
            <img className='profileImage' src={user?.image} alt="" />
            <span>Profile</span>
          </Link>
        </div>
        <div className="logoutBtn" onClick={handleLogout}>
            <TbLogout2/>
            <span>Logout</span>
        </div>
    </SidebarWrapper>
  )
}

export default Sidebar