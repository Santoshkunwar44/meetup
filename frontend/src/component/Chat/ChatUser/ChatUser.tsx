import { useNavigate } from "react-router-dom"
import { ChatUserWrapper } from "./ChatUser.styles"

const ChatUser = () => {
  const navigate =useNavigate()


  const handleGotoChat=()=>{
    navigate("2342423")
  }
  return (
    <ChatUserWrapper onClick={handleGotoChat}>
        <img src="https://images.pexels.com/photos/14192319/pexels-photo-14192319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className="chatUser">
                <h3 className="username">Kyle Stack</h3>
                <p className="message">Hello santosh !</p>
        </div>
    </ChatUserWrapper>
  )
}

export default ChatUser