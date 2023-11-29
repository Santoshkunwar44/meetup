import { ChatHeaderWrapper } from './ChatHeader.styles'
import { IoMdArrowRoundBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import ChatSettingPopover from '../../Popover/chatSetting/ChatSettingPopover';


const ChatHeader = () => {
  return (
    <ChatHeaderWrapper>
      <div className="headerLeft">
      <div className="backButton">

      <IoMdArrowRoundBack className="goBackButton"/>
      </div>
        
      <div className="chatUser">
        <img src="https://images.pexels.com/photos/18500499/pexels-photo-18500499/free-photo-of-first-upload-for-you-all-pexels-family.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        <div className="userInfo">

        <h3 className='chatUsername'>Facebook sathyy</h3>
        <p className='statusText'>Typing...</p>
        </div>
      </div>
      </div>
      <div className='chatAction'>

    <ChatSettingPopover>
      <SlOptionsVertical className="optionButton"/>
    </ChatSettingPopover>

    

      </div>
    </ChatHeaderWrapper>
  )
}

export default ChatHeader