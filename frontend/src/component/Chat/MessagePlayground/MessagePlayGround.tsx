import MessageItem from '../../message/MessageItem'
import StartChat from '../StartChat/StartChat'
import { MessagePlayGroundWrapper } from './MessagePlayGround.styles'

const MessagePlayGround = ({messages}) => {
  return (
    <MessagePlayGroundWrapper>
      {
       messages &&  messages?.length >0 ? messages?.map(msg=><MessageItem data={msg} key={msg?._id}/>):<StartChat/>
      }
      
     
    </MessagePlayGroundWrapper>
  )
}

export default MessagePlayGround