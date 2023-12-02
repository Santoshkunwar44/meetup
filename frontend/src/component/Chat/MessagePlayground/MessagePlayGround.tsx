import { useSelector } from 'react-redux'
import MessageItem from '../../message/MessageItem'
import StartChat from '../StartChat/StartChat'
import { MessagePlayGroundWrapper } from './MessagePlayGround.styles'
import { State } from '../../../redux/reducers'

const MessagePlayGround = () => {

  const {messages} = useSelector((state:State)=>state.app)
  

  return (
    <MessagePlayGroundWrapper>
      {
       messages &&  messages?.length >0 ? messages?.map(msg=><MessageItem data={msg} key={msg?._id}/>):<StartChat/>
      }
      
     
    </MessagePlayGroundWrapper>
  )
}

export default MessagePlayGround