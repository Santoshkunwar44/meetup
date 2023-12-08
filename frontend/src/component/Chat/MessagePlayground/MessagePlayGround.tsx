import { useSelector } from 'react-redux'
import MessageItem from '../../message/MessageItem'
import StartChat from '../StartChat/StartChat'
import { MessagePlayGroundWrapper } from './MessagePlayGround.styles'
import { State } from '../../../redux/reducers'
import MessageSkeleton from '../../skeleton/MessageSkeleton/MessageSkeleton'
import { FC } from 'react'
type messagePlayGroundPropsType={
  loading:boolean
}
const MessagePlayGround:FC<messagePlayGroundPropsType> = ({loading}) => {

  const {messages} = useSelector((state:State)=>state.app)
  

  return (
    <MessagePlayGroundWrapper>
      {
       !loading ?  messages?.length >0 ? messages?.map(msg=><MessageItem data={msg} key={msg?._id}/>):<StartChat/> :<MessageSkeleton/>
      }
      
 
     
    </MessagePlayGroundWrapper>
  )
}

export default MessagePlayGround

