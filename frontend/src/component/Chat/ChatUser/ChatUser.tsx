import { useNavigate, useParams } from "react-router-dom"
import { ChatUserWrapper } from "./ChatUser.styles"
import { getAnotherUserMethod } from "../../../utils/methods";
import { useEffect, useState } from "react";
import { ChatType, UserType } from "../../../utils/Types";
import { useSelector } from "react-redux";
import { State } from "../../../redux/reducers";

type ChatUserPropsType={
  chat:ChatType
}

const ChatUser:React.FC<ChatUserPropsType> = ({chat}) => {


  const navigate =useNavigate()
  const [nextuser,setNextuser] = useState<UserType|null>(null)
  const {onlineUsers} = useSelector((state:State)=>state.app)
  const {user} =useSelector((state:State)=>state.user)
  const [currentChat,setCurrentChat] = useState(false)
  const [ isOnline,setIsOnline] = useState<boolean>(false);
  const {id} = useParams()
  const [hasSeen,setHasSeen] = useState<boolean|null>(null)




  useEffect(()=>{
    if(nextuser?._id){
      setCurrentChat(nextuser?._id===id)
    }
  },[ nextuser , id])
  
   useEffect(()=>{

    if( !nextuser?._id)return;
    setIsOnline(onlineUsers.some(u=>u.userId===nextuser?._id))
    
  },[onlineUsers , nextuser])

  useEffect(()=>{
    if(!user?._id)return;
    setHasSeen(chat.seen.includes(user._id));
  },[user,chat])


  useEffect(()=>{
    if(!user?._id)return;
    let next = getAnotherUserMethod(chat.users,user._id)
    if(!next)return;
    setNextuser(next)
  },[chat,user])


  const handleGotoChat=()=>{
    navigate(`${nextuser?._id}`)
  }


  return (
    <ChatUserWrapper onClick={handleGotoChat} currentChat={currentChat} seen={hasSeen} >
      <div className="imageWrapper">
        <img src={nextuser?.image} alt="chatUserImage" />
       { isOnline && <div className="activeDot"></div>}
      </div>
            <div className="chatUser">
                <h3 className="username">{`${nextuser?.firstName} ${nextuser?.lastName}`}</h3>
                <p className="message"> {chat?.latestMessage?.text}</p>
        </div>
    </ChatUserWrapper>
  )
}

export default ChatUser