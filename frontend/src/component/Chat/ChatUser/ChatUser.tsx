import { useNavigate } from "react-router-dom"
import { ChatUserWrapper } from "./ChatUser.styles"
import { getAnotherUserMethod } from "../../../utils/methods";
import { useEffect, useState } from "react";

const ChatUser = ({chat}) => {
  const navigate =useNavigate()
  const [nextuser,setNextuser] = useState(null)

  let userId = "65688497ac49674e01874450";

  useEffect(()=>{
    let next = getAnotherUserMethod(chat.users,userId)
    setNextuser(next)

  },[chat,userId])






  const handleGotoChat=()=>{
    navigate(`${nextuser?._id}`)
  }
  return (
    <ChatUserWrapper onClick={handleGotoChat}>
        <img src={nextuser?.image} alt="" />
            <div className="chatUser">
                <h3 className="username">{nextuser?.firstName}</h3>
                <p className="message"> {chat.latestMessage?.text}</p>
        </div>
    </ChatUserWrapper>
  )
}

export default ChatUser