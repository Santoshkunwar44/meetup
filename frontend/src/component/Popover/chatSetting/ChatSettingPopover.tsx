import {
  Popover,
  PopoverTrigger,
  PopoverContent,
 
} from '@chakra-ui/react'
import React from 'react'
import { ChatSettingPopoverWrapper } from './ChatSettingPopover.styles'
import { MdBlock } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import ConfirmModal from '../../Modal/confirm/ConfirmModal';
import { Link } from 'react-router-dom';
import { UserType } from '../../../utils/Types';

type ChatSettingPopoverType={
    children:React.ReactNode ,
    user:UserType|null
}

const ChatSettingPopover:React.FC<ChatSettingPopoverType>=({children ,user}) => {

 
    const handleDeleteChat=async()=>{

        

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
            <div className="settingItem">
                <MdBlock/>
                <p>Block user</p>
                
            </div>
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