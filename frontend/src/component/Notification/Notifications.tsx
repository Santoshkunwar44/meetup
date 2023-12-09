import Sidebar from "../sidebar/Sidebar"
import { NotificationWrapper } from "./Notification.styles"
import NotificationItem from "./NotificationItem/NotificationItem"
import { FaRegHeart } from "react-icons/fa";
import {  useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/reducers";
import {  markAllNotificationsAsSeenApi } from "../../utils/Api";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";


const Notifications = () => {
    const {user} = useSelector((state:State)=>state.user)
    const { allNotifications} = useSelector((state:State)=>state.app)
    const dispatch = useDispatch();
    const {refreshAction} = bindActionCreators(actionCreators,dispatch)




  

   

    const handleNotificationSeen=async()=>{

    if(!user?._id)return;

        try {

        const {status}  = await   markAllNotificationsAsSeenApi(user?._id)

        if(status === 200){
               refreshAction()
         }
        } catch (error) {
            console.log(error)
        }
    }
    
  
  return (
    <NotificationWrapper>
        <Sidebar />
        <div className="notificationContainer">
                <div className="header">
                    <div className="headerLeft">
                        <FaRegHeart/>
                        <h3 className="headerTitle">Notifications</h3>
                    </div>
                    <div className="markAsSeen" onClick={handleNotificationSeen}>Mark all as seen </div>
                </div>
                <div className="notificationWrapper">
                    {
                   
                         allNotifications?.map(notification=> <NotificationItem  key={notification?._id} notification={notification} />  )
                         
                    }
                </div>
        </div>
    </NotificationWrapper>
    
  )
}

export default Notifications