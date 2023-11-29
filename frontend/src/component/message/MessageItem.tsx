import { MessageItemWrapper } from './MessageItem.styles'

type MessageItemPropsType={
    own:boolean
}

const MessageItem:React.FC<MessageItemPropsType> = ({own}) => {
  return (
    <MessageItemWrapper own={own}>
        <div className="messageContent">

        <p className='messageText'>Hello santosh how are you </p>
        </div>
        <p className='time'>5 min ago</p>
    </MessageItemWrapper>
  )
}

export default MessageItem