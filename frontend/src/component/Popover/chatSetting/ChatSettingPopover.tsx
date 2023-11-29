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

type ChatSettingPopoverType={
    children:React.ReactNode 
}

const ChatSettingPopover:React.FC<ChatSettingPopoverType>=({children}) => {

 
    const handleDeleteChat=async()=>{

        

    }
  return (
  <Popover>
  <PopoverTrigger>
    <span>{children}</span>
  </PopoverTrigger>
  <PopoverContent>
        <ChatSettingPopoverWrapper className="chatSettingList">
            <div className="settingItem">
                <FaRegUser/>
                <p>Visit profile</p>
                
            </div>
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