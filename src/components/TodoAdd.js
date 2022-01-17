import { Textarea, Button, Flex, Spacer } from "@chakra-ui/react";

export const TodoAdd = ({ buttonText, inputEl, handleAddTodoListItem, placeholder, leftIcon }) => {
  return (
    <>
      <Textarea placeholder={placeholder} bgColor="white" mt="5" borderColor="gray.400" ref={inputEl} fontSize="lg" />
      <Flex>
        <Spacer />
        <Button onClick={handleAddTodoListItem} colorScheme="blue" leftIcon={leftIcon} mt="5">{buttonText}</Button>
        <Spacer />
      </Flex>
    </>
  );
};