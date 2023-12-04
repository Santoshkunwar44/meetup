import Sidebar from '../../sidebar/Sidebar'
import ChatBox from '../ChatBox/ChatBox'
import { ChatOutletWrapper } from './ChatOutlet.styles'
import { Outlet } from 'react-router-dom'

const ChatOutlet = () => {
  return (
    <ChatOutletWrapper>
      <Sidebar small={true}/>
      <ChatBox/>
        <Outlet/>
    </ChatOutletWrapper>
   
  )
}

export default ChatOutlet