import { Link, Outlet } from 'react-router-dom'
import { FriendsOutletWrapper } from './FriendsOutlet.styles'
import Sidebar from '../../sidebar/Sidebar'
import { FaUsers } from 'react-icons/fa'
import { useState } from 'react'

type friendsTabTypes="suggestion"|"followers"|"followings"
const FriendsOutlet = () => {
  const [activeTab,setActiveTab]  = useState<friendsTabTypes>("suggestion")

  const handleTabChange=(tab:friendsTabTypes)=>{
    setActiveTab(tab)
  }
  return (
    <FriendsOutletWrapper>
       <Sidebar/>
       <div className="friendsContent">
            <div className="friendHeader">
              <Link className={`friendsTabItem ${activeTab==="suggestion"?"activeTab":""}`} onClick={()=>handleTabChange('suggestion')} to={'/users'} >
                  <FaUsers/>
                  <h1 className='headerTitle'>Suggested People</h1>
              </Link>
            <Link className={`friendsTabItem ${activeTab==="followings"?"activeTab":""}`} onClick={()=>handleTabChange("followings")} to={'followings'}>
              < FaUsers/>
                <h1 className='headerTitle'>Followings</h1>
            </Link>
            <Link className={`friendsTabItem ${activeTab==="followers"?"activeTab":""}` }onClick={()=>handleTabChange("followers")} to={'followers'}>
               <FaUsers/>
                <h1 className='headerTitle'>Followers</h1>
            </Link>
        </div> 
        <Outlet/>
     
       </div>

    </FriendsOutletWrapper>
  )
}
export default FriendsOutlet