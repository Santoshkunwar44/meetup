import { useEffect, useState } from "react";
import ChatUser from "../ChatUser/ChatUser"
import { ChatBoxWrapper } from "./ChatBox.styles"
import { HiSearch } from "react-icons/hi";
import { fetchChatsOfUserApi } from "../../../utils/Api";


const ChatBox = () => {

  const [chats,setChats] =useState([])
  let userId = '65688497ac49674e01874450'


  useEffect(()=>{
    getAllMyChats()
  },[])

  const getAllMyChats=async()=>{

    if(!userId)return;

    try {
     const {status,data} =  await fetchChatsOfUserApi(userId)
     if(status===200){
      setChats(data.message)
     }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <ChatBoxWrapper>

        <div className="searchUser">
          <div className="inputBox">
            <HiSearch/>
            <input type="text" name="" id=""  placeholder="search chats"/>
          </div>
        </div>
        <div className="chatWrapper">
           {
            chats.map(chat=><ChatUser  chat={chat} key={chat._id}/>)
           }
        </div>

        

    </ChatBoxWrapper>
  )
}

export default ChatBox