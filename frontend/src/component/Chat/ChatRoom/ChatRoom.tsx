
import { useParams } from 'react-router-dom'
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatInput from '../ChatInput/ChatInput'
import MessagePlayGround from '../MessagePlayground/MessagePlayGround'
import { ChatRoomWrapper } from './ChatRoom.styles'
import { fetchChatsOfBothUsersApi, fetchMessagesFromChatApi, fetchUserByIdApi } from '../../../utils/Api'
import { useEffect, useState } from 'react'
import { ChatType, MessageType, UserType } from '../../../utils/Types'
import { useSelector } from 'react-redux'
import { State } from '../../../redux/reducers'

const ChatRoom = () => {
  const {id}  = useParams()
  const [nextuser,setNextuser] = useState<UserType|null>(null);
  const [chat,setChat] = useState<ChatType|null>(null)
  const [messages,setMessages] = useState<MessageType[] | null>(null)
  const {user} =useSelector((state:State)=>state.user)
  useEffect(()=>{
    getUserById()
    getChatsOfBothusers()
  },[id,user])

  useEffect(()=>{
    if(!chat?._id)return;
    getMessagesOfusers()
     
  },[chat])


   const getUserById=async()=>{
    if(!id)return;
    const {data,status} =await fetchUserByIdApi(id)
    if(status===200){
      setNextuser(data.message[0])
    }
   }
   const getChatsOfBothusers=async()=>{
    if(!id || !user?._id)return;

    try {
     const {data,status} =  await fetchChatsOfBothUsersApi(id,user._id)
     if(status===200){
      setChat(data.message)
     }

    } catch (error) {
      console.log(error)
    }

   }
   const getMessagesOfusers=async()=>{
    if(!chat?._id)return;
    try {

     const {data,status} = await  fetchMessagesFromChatApi(chat._id)
     if(status===200){
      setMessages(data.message)
     }

      
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <ChatRoomWrapper>
        <ChatHeader nextUser={nextuser}/>
        <MessagePlayGround messages={messages}/>
        <ChatInput setMessage={setMessages} chat={chat} nextUser={nextuser}/>
    </ChatRoomWrapper>
  )
}

export default ChatRoom