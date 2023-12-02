import {  useEffect, useState } from "react";
import ChatUser from "../ChatUser/ChatUser"
import { ChatBoxWrapper } from "./ChatBox.styles"
import { HiSearch } from "react-icons/hi";
import { fetchChatsOfUserApi, searchUserByUsernameApi } from "../../../utils/Api";
import { useSelector } from "react-redux";
import { State } from "../../../redux/reducers";
import { ChatType, UserType } from "../../../utils/Types";
import { getAnotherUserMethod } from "../../../utils/methods";
import FriendItem from "../../Friends/FriendItem/FriendItem";


const ChatBox = () => {

  const [chats,setChats] =useState<ChatType[]>([])
  const {user} = useSelector((state:State)=>state.user);
  const [filteredChats,setFilteredChats]  = useState<ChatType[]>([]);
  const [searchInput,setSearchInput] =useState("")
  const [searchedFriends , setSearchedFriends] = useState<UserType[]>([])
  const {refresh} =useSelector((state:State)=>state.other)






  useEffect(()=>{
    getAllMyChats()
  },[refresh])

  

  useEffect(()=>{
    handleSearchInputChange()
    handleSearchUser()
  },[searchInput])


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

  const handleSearchInputChange=()=>{
    if(!user?._id)return;
    
     const regex = new RegExp(searchInput, 'i');
     const searched =  chats.filter(chat=>{
     let username = `${getAnotherUserMethod(chat.users,user?._id)?.firstName } ${getAnotherUserMethod(chat.users,user?._id)?.lastName }`
      console.log(regex.test(username))
      return regex.test(username);
    })
    setFilteredChats(searched);
  }

  const handleSearchUser=async()=>{
    if(!user?._id)return;
    try {
      const {data,status} = await  searchUserByUsernameApi(searchInput)
      if(status===200){
        let users:UserType[] = data.message;
      const filteredUsers = users.filter(u => u._id !== user._id && !chats.some(chat => chat._id === user._id)
)

        setSearchedFriends(filteredUsers)
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
            <input type="text" placeholder="search chats or friends" onChange={e=>setSearchInput(e.target.value)}/>
          </div>
        </div>
        <div className="chatWrapper">
           {
           searchInput.length > 0 ? 
           filteredChats.map(chat=><ChatUser chat={chat} key={chat._id}/>) 
           :   chats.map(chat=><ChatUser  chat={chat} key={chat._id}/>)
           }
        </div>
           
      {  searchInput.length >0 && <>
      
      
         <h3 className="title">Friends</h3>
         <div className="friendsWrapper">
          {
            searchedFriends.map(friend=><FriendItem chat={true} user={friend} key={friend._id}/>)
          }
        </div>
          </>
        }

        

    </ChatBoxWrapper>
  )
}

export default ChatBox