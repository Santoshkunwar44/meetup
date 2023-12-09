import {   useEffect, useState } from "react";
import ChatUser from "../ChatUser/ChatUser"
import { ChatBoxWrapper } from "./ChatBox.styles"
import { HiSearch } from "react-icons/hi";
import {  searchUserByUsernameApi } from "../../../utils/Api";
import { useSelector } from "react-redux";
import { State } from "../../../redux/reducers";
import { ChatType, UserType } from "../../../utils/Types";
import { getAnotherUserMethod } from "../../../utils/methods";
import FriendItem from "../../Friends/FriendItem/FriendItem";
import UserSkeleton from "../../skeleton/UserSkeleton/UserSkeleton";


const ChatBox = () => {

  const {user} = useSelector((state:State)=>state.user);
  const {allChats} = useSelector((state:State)=>state.app);
  const [filteredChats,setFilteredChats]  = useState<ChatType[]>([]);
  const [searchInput,setSearchInput] =useState("")
  const [searchedFriends , setSearchedFriends] = useState<UserType[]>([])
  const [loading,setLoading] = useState(false)




  console.log("all chats",allChats)


  

  useEffect(()=>{
    handleSearchInputChange()
    handleSearchUser()
  },[searchInput])




  const handleSearchInputChange=()=>{
    if(!user?._id || !allChats)return;
     const regex = new RegExp(searchInput, 'i');
     const searched =  allChats?.filter(chat=>{
     let username = `${getAnotherUserMethod(chat?.users,user?._id)?.firstName } ${getAnotherUserMethod(chat.users,user?._id)?.lastName }`
      return regex.test(username);
    })
    setFilteredChats(searched);
  }





  const handleSearchUser=async()=>{

    if(!user?._id || !allChats)return;
    setLoading(true)
    try {
      const {data,status} = await  searchUserByUsernameApi(searchInput)
      if(status===200){
        let users:UserType[] = data.message;
       const filteredUsers = users.filter(u => u._id !== user._id && !allChats?.some(chat =>{
         let nextUser = getAnotherUserMethod(chat.users,user._id)
        
        return  nextUser?._id === user._id
       })
)       
        setSearchedFriends(filteredUsers)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
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
        {
          loading ? <UserSkeleton/>: 
          <>
        <div className="chatWrapper">
           { 
           
           searchInput.length > 0 ? 
           filteredChats.map(chat=><ChatUser chat={chat} key={chat?._id}/>) 
           :   allChats?.map(chat=><ChatUser  chat={chat} key={chat?._id}/>)
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
           </> 


        }
      
     

        

    </ChatBoxWrapper>
  )
}

export default ChatBox