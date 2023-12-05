import { ChatHeaderWrapper } from './ChatHeader.styles'
import { IoMdArrowRoundBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import ChatSettingPopover from '../../Popover/chatSetting/ChatSettingPopover';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';
import { useEffect, useState } from 'react';



const ChatHeader = () => {

  const {nextUser} = useSelector((state:State)=>state.app)
  const navigate  = useNavigate()
  const [ isOnline,setIsOnline] = useState<boolean>(false);
  const { onlineUsers } = useSelector((state: State) => state.app);
  // const [isTyping,setIsTyping] = useState<boolean>(false)

   useEffect(()=>{
    if( !nextUser?._id)return;
    setIsOnline(onlineUsers.some(u=>u.userId===nextUser?._id))
  },[onlineUsers , nextUser])



  return (
    <ChatHeaderWrapper>
      <div className="headerLeft">
      <div className="backButton" onClick={()=>navigate(-1)}>

      <IoMdArrowRoundBack className="goBackButton"/>
      </div>
        
      <div className="chatUser">
        <div className="imageWrapper">
{      isOnline &&   <div className="activeDot"></div>}
        <img src={nextUser?.image} alt="" />
        </div>
        <div className="userInfo">

        <h3 className='chatUsername'>{`${nextUser?.firstName} ${nextUser?.lastName}`}</h3>
        <p className='statusText'>{isOnline? "active":""}</p>
        </div>
      </div>
      </div>
      <div className='chatAction'>

    <ChatSettingPopover  user={nextUser}>
      <SlOptionsVertical className="optionButton"/>
    </ChatSettingPopover>

    

      </div>
    </ChatHeaderWrapper>
  )
}

export default ChatHeader