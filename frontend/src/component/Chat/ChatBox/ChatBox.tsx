import ChatUser from "../ChatUser/ChatUser"
import { ChatBoxWrapper } from "./ChatBox.styles"

const ChatBox = () => {
  return (
    <ChatBoxWrapper>

        <div className="searchUser">
          <div className="inputBox">

            <input type="text" name="" id=""  placeholder="search friends"/>
          </div>
        </div>
        <div className="chatWrapper">
            <ChatUser/>
            <ChatUser/>
            <ChatUser/>
            <ChatUser/>
        </div>

        

    </ChatBoxWrapper>
  )
}

export default ChatBox