import {
  Popover,
  PopoverTrigger,
  PopoverContent,
 
} from '@chakra-ui/react'
import React from 'react'
import { ChatSettingPopoverWrapper } from './ChatSettingPopover.styles'
import { MdOutlineDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import ConfirmModal from '../../Modal/confirm/ConfirmModal';
import { Link, useNavigate } from 'react-router-dom';
import { UserType } from '../../../utils/Types';
import { deleteChatApi } from '../../../utils/Api';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux';

type ChatSettingPopoverType={
    children:React.ReactNode ,
    user:UserType|null
}

const ChatSettingPopover:React.FC<ChatSettingPopoverType>=({children ,user}) => {

  const {chat} = useSelector((state:State)=>state.app)
  const dispatch  = useDispatch()
  const {refreshAction} = bindActionCreators(actionCreators,dispatch)


  const navigate =useNavigate()
 
      const handleDeleteChat=async()=>{
    if(!chat?._id)return;
    try {
      const {status} =   await deleteChatApi(chat?._id)
      if(status===200){
        navigate("../")
        refreshAction()
      }
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
  <Popover>
  <PopoverTrigger>
    <span>{children}</span>
  </PopoverTrigger>
  <PopoverContent>
        <ChatSettingPopoverWrapper className="chatSettingList">
            <Link to={`/profile/${user?._id}`} className="settingItem">
                <FaRegUser/>
                <p>Visit profile</p>
                
            </Link>
            {/* <div className="settingItem">
                <MdBlock/>
                <p>Block user</p>
                
            </div> */}
            <ConfirmModal text='Are you sure you want to delete the chat ?' cb={handleDeleteChat}>

            <div className="settingItem">
                <MdOutlineDelete/>
                <p>Delete chat</p>
            </div>
            </ConfirmModal>
        </ChatSettingPopoverWrapper>
  </PopoverContent>
</Popover>
  )
}

export default ChatSettingPopover