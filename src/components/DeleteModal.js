import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
} from '@chakra-ui/react'

import { Button } from '@chakra-ui/react';

export const DeleteModal = ({isOpen, onClose, handleDeleteTodoListItem}) => {

  return (
    <Modal size="xs" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>削除しますか？</ModalHeader>
        <ModalCloseButton />
        <ModalBody>

          <Center>
          <Button colorScheme='red' mr={3} onClick={handleDeleteTodoListItem}>
            OK
          </Button>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}