import { useEffect, useState } from 'react'
import { MessageItemWrapper } from './MessageItem.styles'
import { MessageType } from '../../utils/Types'
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducers'
type MessagteItemType={
  data:MessageType
}
const MessageItem:React.FC<MessagteItemType> = ({data}) => {

  const [own,setOwn] = useState<boolean|null>(null)
  const {user} = useSelector((state:State)=>state.user)


  useEffect(()=>{

    if(data?.senderId && user?._id){
      if(data?.senderId?._id ===user._id){
        setOwn(true)
      }else{
        setOwn(false)

      }
    }

  },[user,data])


  return (
    <MessageItemWrapper own={own}>
        <div className="messageContent">

        <p className='messageText'>{data?.text} </p>
        </div>
        <p className='time'>5 min ago</p>
    </MessageItemWrapper>
  )
}

export default MessageItem