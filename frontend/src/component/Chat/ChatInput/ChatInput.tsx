import React, { useState } from 'react';
import { ChatInputWrapper } from './ChatInput.styles'
import { FaMicrophone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import useAlert from '../../../hooks/useAlert';
import { useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';
import { ChatType, MessageType, UserType } from '../../../utils/Types';
import { createMessageApi, createNewMessageApi } from '../../../utils/Api';

type ChatInputPropsType={
  chat:ChatType |null,
  nextUser:UserType |null,
  setMessage:React.Dispatch<React.SetStateAction<MessageType[]|null>>
}

const ChatInput:React.FC<ChatInputPropsType> = ({chat,nextUser,setMessage}) => {
  const [messageInput,setMessageInput] = useState("");
  const {user} = useSelector((state:State)=>state.user)
  const {notify} = useAlert()




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
        setMessage((prev)=>([...prev,data.message]))
        setMessageInput("")
      }

      }else{

        const {data,status} = await createMessageApi(messagePayload)

        if(status===200){

        setMessage((prev)=>([...prev,data.message]))
        setMessageInput("")

      }
      }




      
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