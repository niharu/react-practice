import { Textarea, Button } from "@chakra-ui/react";

export const TodoAdd = ({ buttonText, inputEl, handleAddTodoListItem, placeholder, leftIcon }) => {
  return (
    <>
      <Textarea placeholder={placeholder} bgColor="white" mt="8" borderColor="gray.400" ref={inputEl} />
      <Button onClick={handleAddTodoListItem} colorScheme="blue" leftIcon={leftIcon} mt="8">{buttonText}</Button>
    </>
  );
};