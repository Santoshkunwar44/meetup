import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar"
import { NotificationWrapper } from "./Notification.styles"
import NotificationItem from "./NotificationItem/NotificationItem"
import { FaRegHeart } from "react-icons/fa";
import { NotificationType } from "../../utils/Types";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducers";
import { getNotificationOfUserApi } from "../../utils/Api";

const Notifications = () => {
    const [notification,setNotification] =useState<NotificationType[]|null>(null)
    const {user} = useSelector((state:State)=>state.user)
    useEffect(()=>{ 
        if(!user?._id)return;
        getNotificationOfUser()
    },[user])

    const getNotificationOfUser=async()=>{
        if(!user?._id)return;
        try {
            const {status,data} = await getNotificationOfUserApi(user._id)

            if(status===200){
                setNotification(data.message)
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
                </div>
                <div className="notificationWrapper">

                    {

                        notification && notification?.map(notification=> <NotificationItem notification={notification} />  )
                    }
                    
                </div>
        </div>
    </NotificationWrapper>
    
  )
}

export default Notifications