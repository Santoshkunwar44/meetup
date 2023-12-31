import { FriendsSidebarWrapper } from './FriendsSidebar.styles'
import { FaUsers } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
import { RiUserVoiceLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const FriendsSidebar = () => {
  return (


<FriendsSidebarWrapper>
       <Link to={""}>
       
        <div className="friendSidebarItem">
          <div className="iconBox">

            <FaUsers/>
          </div>
            <h4 className='itemName'>Suggested</h4>
        </div>
       </Link>
       <Link to={"followings"}>
        <div className="friendSidebarItem">
          <div className="iconBox">

            <RiUserHeartLine/>
          </div>
            <h4 className='itemName'>Following</h4>
        </div>
       </Link>
       <Link to={"followers"}>
        <div className="friendSidebarItem">
          <div className="iconBox">

            <RiUserVoiceLine/>
          </div>
            <h4 className='itemName'>Followers</h4>
        </div>
       </Link>
    </FriendsSidebarWrapper>

  )
}

export default FriendsSidebar