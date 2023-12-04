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
  const {user} =useSelector((state:State)=>state.user)
  const [currentChat,setCurrentChat] = useState(false)
  const {id} = useParams()

  useEffect(()=>{
    if(nextuser?._id&&id){
      setCurrentChat(nextuser?._id===id)
    }
  },[nextuser ,id])





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
    <ChatUserWrapper onClick={handleGotoChat} currentChat={currentChat}>
        <img src={nextuser?.image} alt="" />
            <div className="chatUser">
                <h3 className="username">{`${nextuser?.firstName} ${nextuser?.lastName}`}</h3>
                <p className="message"> {chat.latestMessage?.text}</p>
        </div>
    </ChatUserWrapper>
  )
}

export default ChatUser