import  { useState } from 'react';
import { ChatInputWrapper } from './ChatInput.styles'
import { FaMicrophone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import useAlert from '../../../hooks/useAlert';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';
import { createMessageApi, createNewMessageApi } from '../../../utils/Api';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux';
import { Enums } from '../../../utils/Enums';



const ChatInput =() => {
  const [messageInput,setMessageInput] = useState("");
  const {user} = useSelector((state:State)=>state.user)
  const {chat,nextUser,socket} = useSelector((state:State)=>state.app)
  const {notify} = useAlert()
  const dispatch  = useDispatch()
  const {refreshAction ,AddNewMessageAction,AddChatAction} = bindActionCreators(actionCreators,dispatch)


  const handleSentMessage=async()=>{
    if(!user?._id || !nextUser?._id)return;
    if(!messageInput){
      notify("Cannot sent empty message","error")
    }
    try {

      let  messagePayload = {
        senderId:user?._id,
        chatId:chat?._id,
        text:messageInput,
        users:[]
      }
    
      if(!chat?._id){


        let newMessagePayload = {
        ...messagePayload,
        users:[
          user?._id,
          nextUser?._id
        ]
      }

      const {data,status } = await createNewMessageApi(newMessagePayload)

      if(status===200){
        socket?.emit(Enums.MESSAGE,{...data.message,nextUser:nextUser?._id})
        let chat = data.message.chatId;
        AddChatAction(chat)
        AddNewMessageAction(data.message)
        setMessageInput("")

      }
      }else{
        
        const {data,status} = await createMessageApi(messagePayload)
        if(status===200){
        socket?.emit(Enums.MESSAGE,{...data.message,nextUser:nextUser?._id})
        AddNewMessageAction(data.message);
        setMessageInput("");
      }
      }
      // refreshAction()
      
    } catch (error) {

      console.log(error)
      
    }
  }

  return (
    <ChatInputWrapper>
      <div className="leftBox">

      <FaMicrophone className="micIcon"/>
      <input type="text" placeholder='write message...'  value={messageInput} onChange={e=>setMessageInput(e.target.value)} />
      </div>
      <div className="sendBox" onClick={handleSentMessage}>
          <IoIosSend/>
      </div>
    </ChatInputWrapper>
  )
}

export default ChatInput