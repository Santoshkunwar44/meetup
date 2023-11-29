import MessageItem from '../../message/MessageItem'
import { MessagePlayGroundWrapper } from './MessagePlayGround.styles'

const MessagePlayGround = () => {
  return (
    <MessagePlayGroundWrapper>
      <MessageItem own={true} />
      <MessageItem own={false}/>
      <MessageItem own={true}/>
      <MessageItem own={true}/>
      <MessageItem own={false}/>
      <MessageItem own={false}/>
      <MessageItem own={true}/>
      <MessageItem own={true}/>
      <MessageItem own={false}/>
      <MessageItem own={false}/>
      <MessageItem own={true}/>
      <MessageItem own={true}/>
      <MessageItem own={false}/>
    </MessagePlayGroundWrapper>
  )
}

export default MessagePlayGround