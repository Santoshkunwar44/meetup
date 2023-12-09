import { useEffect, useRef } from "react";
import { bindActionCreators } from "redux";
import  { Socket, io }  from "socket.io-client";
import { actionCreators } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/reducers";
import { Enums } from "../utils/Enums";
import { MessageType, NotificationType, onlineUsersType } from "../utils/Types";
import { useLocation } from "react-router-dom";
import { AddNewChatAction } from "../redux/actions/actionCreators";


const useSocket = () => {



 const dispatch = useDispatch()
 const {AddSocketAction,AddOnlineUsersAction ,AddNewMessageAction , AddAllNotificationsAction ,refreshAction} = bindActionCreators(actionCreators,dispatch );
 const {user} = useSelector((state:State)=>state.user)
 const location =useLocation()
 const {chat, allNotifications,allChats} = useSelector((state:State)=>state.app)




 const socketRef= useRef<Socket|null>(null)

    

     

 

    useEffect(() => {
        const socket = io("ws://localhost:8000");
        socketRef.current  = socket;
        AddSocketAction(socket)

        return ()=>{
            socketRef.current?.emit(Enums.LEAVE,user?._id)
        }
    }, [])

     useEffect(() => {

        if(!user || !socketRef.current) return;
         socketRef.current?.emit(Enums.JOIN,user._id);
    }, [user,socketRef.current])

    useEffect(()=>{

        if(!socketRef.current)return;


        socketRef.current.on(Enums.SEND_ONLINE_USERS,handleOnlineUsersEvent)
        socketRef.current.on(Enums.SEND_MESSAGE,handleMessageEvent)
        socketRef.current.on(Enums.SEND_NOTIFICATION,handleNotificationEvent)


             return () => {
        // Clean up previous socket listener
        socketRef.current?.off(Enums.SEND_MESSAGE,handleMessageEvent );
        socketRef.current?.off(Enums.SEND_ONLINE_USERS,handleOnlineUsersEvent );
        socketRef.current?.off(Enums.SEND_NOTIFICATION, handleNotificationEvent );
        };

    },[chat]);

    const handleMessageEvent=(message:MessageType)=>{
   
            if(chat?._id  === message.chatId?._id ){
                console.log("adding message")
                AddNewMessageAction(message)
            }
            refreshAction()
    }

    const handleNotificationEvent=(notification:NotificationType)=>{
         if(notification.type==="FOLLOW" || notification.type==="FOLLOW_BACK"){
            AddAllNotificationsAction([notification,...allNotifications])
           
            }
    }

    const handleOnlineUsersEvent=(onlineUsers:onlineUsersType[])=>{
            AddOnlineUsersAction(onlineUsers)
    }



}

export default useSocket