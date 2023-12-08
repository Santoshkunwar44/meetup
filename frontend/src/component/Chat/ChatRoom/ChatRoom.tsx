
import { useParams } from 'react-router-dom'
import ChatHeader from '../ChatHeader/ChatHeader'
import ChatInput from '../ChatInput/ChatInput'
import MessagePlayGround from '../MessagePlayground/MessagePlayGround'
import { ChatRoomWrapper } from './ChatRoom.styles'
import { fetchChatsOfBothUsersApi, fetchMessagesFromChatApi, fetchUserByIdApi, markChatAsSeenApi } from '../../../utils/Api'
import { useEffect, useState } from 'react'
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
  const [loading,setLoading] =useState(false)


useEffect(()=>{
  markChatAsSeen()
},[chat,user])


  

  useEffect(()=>{
    getUserById()
    getChatsOfBothusers()
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
      // refreshAction()
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
    setLoading(true)
    try {
     const {data,status} =  await fetchChatsOfBothUsersApi(id,user._id)
     if(status===200){
      if(data.message){
        AddChatAction(data.message)
      }else{
        AddChatAction(null)
        AddMessageAction([])
        setLoading(false)
      }
     }

    } catch (error) {
      setLoading(false)
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
     setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
   }
  return (
    <ChatRoomWrapper>
        <ChatHeader />
        <MessagePlayGround loading={loading}/>
        <ChatInput />
    </ChatRoomWrapper>
  )
}

export default ChatRoom