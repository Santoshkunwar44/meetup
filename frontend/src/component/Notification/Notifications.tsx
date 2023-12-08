import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar"
import { NotificationWrapper } from "./Notification.styles"
import NotificationItem from "./NotificationItem/NotificationItem"
import { FaRegHeart } from "react-icons/fa";
import { NotificationType } from "../../utils/Types";
import {  useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/reducers";
import { getNotificationOfUserApi, markAllNotificationsAsSeenApi } from "../../utils/Api";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import UserSkeleton from "../skeleton/UserSkeleton/UserSkeleton";


const Notifications = () => {
    const [notification,setNotification] =useState<NotificationType[]>([]);
    const {user} = useSelector((state:State)=>state.user)
    const {newNotification} = useSelector((state:State)=>state.app)
    const {refresh} = useSelector((state:State)=>state.other);
    const dispatch = useDispatch();
    const {refreshAction} = bindActionCreators(actionCreators,dispatch)
    const [loading,setLoading] = useState(false)




    useEffect(()=>{ 
        if(!user?._id)return;
        getNotificationOfUser()
    },[user,refresh])
    

    useEffect(()=>{
        if(newNotification){
           setNotification((prev)=>[newNotification,...prev])
        }
    },[newNotification])

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
    
    const getNotificationOfUser=async()=>{
        if(!user?._id)return;
        setLoading(true)
        try {
            const {status,data} = await getNotificationOfUserApi(user._id)

            if(status===200){
                setNotification(data.message)
            }
            setLoading(false)
        } catch (error) {

            setLoading(false)
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
                        loading ?<UserSkeleton/>:
                         notification?.map(notification=> <NotificationItem  key={notification?._id} notification={notification} />  )
                         
                    }
                </div>
        </div>
    </NotificationWrapper>
    
  )
}

export default Notifications