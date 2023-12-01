import { ChangeEvent, useEffect, useState } from "react";
import ChatUser from "../ChatUser/ChatUser"
import { ChatBoxWrapper } from "./ChatBox.styles"
import { HiSearch } from "react-icons/hi";
import { fetchChatsOfUserApi } from "../../../utils/Api";
import { useSelector } from "react-redux";
import { State } from "../../../redux/reducers";
import { ChatType, UserType } from "../../../utils/Types";


const ChatBox = () => {

  const [chats,setChats] =useState<ChatType[]>([])
  const {user} = useSelector((state:State)=>state.user);
  const [filteredChats,setFilteredChats]  = useState<ChatType[]>([]);
  const [searchInput,setSearchInput] =useState("")
  const [searchedFriends , setSearchedFriends] = useState<UserType[]>([])




  useEffect(()=>{
    getAllMyChats()
  },[])

  const getAllMyChats=async()=>{

    if(!user?._id)return;

    try {
     const {status,data} =  await fetchChatsOfUserApi(user?._id)
     if(status===200){
      setChats(data.message)
     }
    } catch (error) {
      console.log(error)
    }

  }

  const handleSearchInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
    
  }

  return (
    <ChatBoxWrapper>

        <div className="searchUser">
          <div className="inputBox">
            <HiSearch/>
            <input type="text"   placeholder="search chats or friends"/>
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