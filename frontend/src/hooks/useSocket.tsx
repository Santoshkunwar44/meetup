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
 const {AddSocketAction,AddOnlineUsersAction ,AddNewMessageAction , AddNotificationsAction ,AddUserStatsAction} = bindActionCreators(actionCreators,dispatch );
 const {user} = useSelector((state:State)=>state.user)
 const location =useLocation()
 const {chat,unseenChatCount,unseenNotificationCount,allChats} = useSelector((state:State)=>state.app)




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
        socketRef.current?.off(Enums.SEND_ONLINE_USERS,handleMessageEvent );
        socketRef.current?.off(Enums.SEND_NOTIFICATION,handleMessageEvent );
        };

    },[chat]);

    const handleMessageEvent=(message:MessageType)=>{
        console.log("current chat id ",chat?._id)
            if(chat?._id  === message.chatId?._id ){
                console.log("adding message")
                AddNewMessageAction(message)
            }else{
                console.log("adding notification")
                AddUserStatsAction({ unseenChatCount :unseenChatCount ? unseenChatCount + 1 : 1, unseenNotificationCount})
            }

            if(location.pathname.split("/")[1]==="chat"){
                if(!allChats?.some(c=>c._id === message.chatId._id)){
                    AddNewChatAction([message.chatId , ...allChats])
                }
            }

    }

    const handleNotificationEvent=(notification:NotificationType)=>{
         if(notification.type==="FOLLOW" || notification.type==="FOLLOW_BACK"){
             AddUserStatsAction({  unseenChatCount , unseenNotificationCount: unseenNotificationCount ? unseenNotificationCount+1 :1})
             AddNotificationsAction(notification);
            }
    }

    const handleOnlineUsersEvent=(onlineUsers:onlineUsersType[])=>{
            AddOnlineUsersAction(onlineUsers)
    }



}

export default useSocket