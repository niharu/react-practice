import { ListItem, Text, Flex, Button, IconButton, Checkbox, Box, Spacer, Center } from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
  
  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);

  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  const onclickSample = () => {
    console.log("click!");
  };

  return (
    <ListItem
      borderWidth="1px"
      p="1"
      mt="2"
      bg="white"
      borderRadius="md"
      borderColor="gray.300">
      <Flex align="center" justify="flex-end">
        <Center>
          <Checkbox ml="2" onChange={handleToggleTodoListItemStatus} isChecked={todo.done} />
          <Text
            ml="3"
            onClick={onclickSample} >
            {todo.done ? <del>{todo.content}</del> : todo.content}
          </Text>
        </Center>
        <Spacer />
        <Box>
          <IconButton
            icon={<DeleteIcon />}
            variant="unstyled"
            aria-label="delete"
            onClick={handleDeleteTodoListItem} />
        </Box>
      </Flex>
    </ListItem>
  )
}
