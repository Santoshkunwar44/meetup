
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatInput from '../ChatInput/ChatInput'
import MessagePlayGround from '../MessagePlayground/MessagePlayGround'
import { ChatRoomWrapper } from './ChatRoom.styles'

const ChatRoom = () => {
  return (
    <ChatRoomWrapper>
        <ChatHeader />
        <MessagePlayGround/>
        <ChatInput/>
    </ChatRoomWrapper>
  )
}

export default ChatRoom