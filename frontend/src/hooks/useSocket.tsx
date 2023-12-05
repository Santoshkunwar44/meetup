import { useEffect, useRef } from "react";
import { bindActionCreators } from "redux";
import  { Socket, io }  from "socket.io-client";
import { actionCreators } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/reducers";
import { Enums } from "../utils/Enums";
import { MessageType, UserType, onlineUsersType } from "../utils/Types";

const useSocket = () => {
 const dispatch = useDispatch()
 const {AddSocketAction,AddOnlineUsersAction ,AddNewMessageAction} = bindActionCreators(actionCreators,dispatch );
 const {chat} = useSelector((state:State)=>state.app)
 const {user } = useSelector((state:State)=>state.user)
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
       socketRef.current.on(Enums.SEND_ONLINE_USERS,(onlineUsers:onlineUsersType[])=>{
            console.log("socket online users",onlineUsers)
            AddOnlineUsersAction(onlineUsers)
         })
         socketRef.current.on(Enums.SEND_MESSAGE,(message:MessageType)=>{
            if(chat?._id  === message.chat?._id ){
                console.log("socket message",message)
                AddNewMessageAction(message)
            }
         })
    },[])



    return {}
}

export default useSocket