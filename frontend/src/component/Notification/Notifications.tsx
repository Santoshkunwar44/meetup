import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar"
import { NotificationWrapper } from "./Notification.styles"
import NotificationItem from "./NotificationItem/NotificationItem"
import { FaRegHeart } from "react-icons/fa";
import { NotificationType } from "../../utils/Types";
import {  useSelector } from "react-redux";
import { State } from "../../redux/reducers";
import { getNotificationOfUserApi } from "../../utils/Api";


const Notifications = () => {
    const [notification,setNotification] =useState<NotificationType[]>([]);
    const {user} = useSelector((state:State)=>state.user)
    const {newNotification} = useSelector((state:State)=>state.app)
    useEffect(()=>{ 
        if(!user?._id)return;
        getNotificationOfUser()
    },[user])

    useEffect(()=>{
        if(newNotification){
           setNotification((prev)=>[newNotification,...prev])
        }
    },[newNotification])

    
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

                        notification && notification?.map(notification=> <NotificationItem  key={notification?._id} notification={notification} />  )
                    }
                    
                </div>
        </div>
    </NotificationWrapper>
    
  )
}

export default Notifications