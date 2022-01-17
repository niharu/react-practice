import { ListItem, Text, Flex, Button, IconButton, Checkbox, Box, Spacer, Center, Textarea } from "@chakra-ui/react";

import { DeleteIcon, DownloadIcon } from "@chakra-ui/icons";

import { useState, useRef } from "react";
import { DeleteModal } from "./DeleteModal";

import { useDisclosure } from "@chakra-ui/react"

export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem, updateTodoContent }) => {

  const [editable, setEditable] = useState(false);

  const [text, setText] = useState(todo.content);

  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);

  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  const handleSetEditable = () => setEditable((prev) => !prev);

  const inputEl = useRef(todo.content);

  const handleUpdateTodoContent = () => {
    updateTodoContent(todo.id, inputEl.current.value);
    setEditable(false);
  };

  const handleChangeText = (e) => setText(e.target.value);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ListItem
      p="1"
      mt="1"
      bg="white"
      >
      <Flex align="center" justify="flex-end">
        <Checkbox ml="2" onChange={handleToggleTodoListItemStatus} isChecked={todo.done} />
        <Box w="1850px">
        {editable ?
          <Textarea
            ml="3"
            ref={inputEl}
            value={text}
            onChange={handleChangeText}
            w="100%"
            min-height="100%"
            rows="1"
            fontSize="lg"
            paddingLeft="3px"
          >
          </Textarea> :
          <Text
            ml="3"
            onClick={handleSetEditable} 
            paddingLeft="4px"
            >
            {todo.done ? <del>{text}</del> : text}
          </Text>
        }
        </Box>
        <Spacer />
        {editable &&
          <Button
            w="20"
            h="8"
            ml="5"
            mt="1"
            colorScheme="blue"
            onClick={handleUpdateTodoContent} >保存</Button>
        }
        <IconButton
          icon={<DeleteIcon />}
          variant="unstyled"
          aria-label="delete"
          onClick={onOpen}
          />

        <DeleteModal isOpen={isOpen} onClose={onClose} handleDeleteTodoListItem={handleDeleteTodoListItem}/>
      </Flex>
    </ListItem>
  )
}
