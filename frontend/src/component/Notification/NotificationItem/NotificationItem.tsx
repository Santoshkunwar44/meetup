import { FC } from "react"
import { NotificationType } from "../../../utils/Types"
import { NotificationItemWrapper } from "./NotificationItem.styles"
import { format } from "timeago.js"
import { useNavigate } from "react-router-dom"
type NotificationItemPropsType={
    notification:NotificationType
}

const NotificationItem:FC<NotificationItemPropsType> = ({notification}) => {
    const navigate =useNavigate()


    const handleClick=()=>{
        if(notification.type==="FOLLOW"|| notification.type==="FOLLOW_BACK"){
            navigate(`/profile/${notification.from._id}`)
        }
    }   

  return (
    <NotificationItemWrapper onClick={handleClick} seen={notification.seen}>

        <div className="imageWrapper">
            <img src={notification?.from?.image} alt={"userProfile"} />
        </div>
        <div className="content">
            {notification.text}
        </div>
        <div className="time">
            {format(notification.createdAt)}
        </div>
        
        

    </NotificationItemWrapper>
  )
}

export default NotificationItem