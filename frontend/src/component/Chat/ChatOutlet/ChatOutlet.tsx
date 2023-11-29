import ChatBox from '../ChatBox/ChatBox'
import { ChatOutletWrapper } from './ChatOutlet.styles'
import { Outlet } from 'react-router-dom'

const ChatOutlet = () => {
  return (
    <ChatOutletWrapper>
      <ChatBox/>
        <Outlet/>
    </ChatOutletWrapper>
   
  )
}

export default ChatOutlet