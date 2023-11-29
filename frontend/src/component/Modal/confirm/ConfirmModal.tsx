import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { ConfirmModalWrapper } from './ConfirmModal.styles';

type ConfirmModalType = {
    children: React.ReactNode,
    text: string,
    cb: ()=>Promise<void>;  // Modify the type of cb
}

const ConfirmModal: React.FC<ConfirmModalType> = ({ children, text, cb }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleConfirm = async() => {
          try {
            await cb();  // Wait for the API call to complete
            onClose();    // Close the modal after the API call is successful
        } catch (error) {
            // Handle any errors that occur during the API call
            console.error("Error during API call:", error);
        }
    }

    return (
        <>
            <span onClick={onOpen}>{children}</span>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent background={"transparent"}>
                    <ConfirmModalWrapper>
                    <p className='confirmText'>{text}</p>
                    <div className="actionButtons">
                        <button className='cancelBtn' onClick={onClose}>Cancel</button>
                        <button className='confirmBtn' onClick={handleConfirm}>Confirm</button>
                    </div>
                    </ConfirmModalWrapper>
                </ModalContent>
            </Modal>
        </>
    )
}



export default ConfirmModal