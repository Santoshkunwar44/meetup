import { useEffect, useState } from 'react'
import { MessageItemWrapper } from './MessageItem.styles'
import { MessageType } from '../../utils/Types'
type MessagteItemType={
  data:MessageType
}
const MessageItem:React.FC<MessagteItemType> = ({data}) => {

  const [own,setOwn] = useState<boolean|null>(null)
  const userId = "65688497ac49674e01874450";


  useEffect(()=>{

    if(data?.senderId && userId){
      if(data?.senderId?._id ===userId){
        setOwn(true)
      }else{
        setOwn(false)

      }
    }

  },[userId,data])


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