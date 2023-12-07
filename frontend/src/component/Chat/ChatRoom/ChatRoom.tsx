
import { useParams } from 'react-router-dom'
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatInput from '../ChatInput/ChatInput'
import MessagePlayGround from '../MessagePlayground/MessagePlayGround'
import { ChatRoomWrapper } from './ChatRoom.styles'
import { fetchChatsOfBothUsersApi, fetchMessagesFromChatApi, fetchUserByIdApi, markChatAsSeenApi } from '../../../utils/Api'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../../redux/reducers'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../redux'

const ChatRoom = () => {
  const {id}  = useParams()
  const {user} =useSelector((state:State)=>state.user);
  const {chat} = useSelector((state:State)=>state.app)
  const dispatch = useDispatch()
  const {AddMessageAction,AddNextUserAction,AddChatAction,refreshAction} = bindActionCreators(actionCreators,dispatch)





  

  useEffect(()=>{
    getUserById()
    getChatsOfBothusers()
    markChatAsSeen()
  },[id,user])

  useEffect(()=>{
    if(!chat?._id)return;
    getMessagesOfusers()
  },[chat])

  const markChatAsSeen =async()=>{
    if(!chat?._id || !user?._id)return;

    try {

    const {status}  =  await markChatAsSeenApi(chat?._id,user?._id);
    

    if(status===200){
      refreshAction()
    }
    } catch (error) {
      console.log(error)
    }
  }

   const getUserById=async()=>{
    if(!id)return;
    const {data,status} =await fetchUserByIdApi(id)
    if(status===200){
      AddNextUserAction(data.message[0])
    }
   }
   const getChatsOfBothusers=async()=>{
    if(!id || !user?._id)return;

    try {
     const {data,status} =  await fetchChatsOfBothUsersApi(id,user._id)
     if(status===200){
      if(data.message){
        AddChatAction(data.message)
      }else{
        AddChatAction(null)
        AddMessageAction([])
      }
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
      AddMessageAction(data.message)
     }
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <ChatRoomWrapper>
        <ChatHeader />
        <MessagePlayGround />
        <ChatInput />
    </ChatRoomWrapper>
  )
}

export default ChatRoom