import { ChatInputWrapper } from './ChatInput.styles'
import { FaMicrophone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const ChatInput = () => {
  return (
    <ChatInputWrapper>
      <div className="micBox">
      <FaMicrophone/>
      </div>
      <input type="text" placeholder='write message...' />
      <div className="sendBox">
          <IoIosSend/>
      </div>
    </ChatInputWrapper>
  )
}

export default ChatInput