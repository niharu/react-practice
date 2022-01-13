import { List } from "@chakra-ui/react";
import { TodoTitle } from "./TodoTitle";

import { TodoItem } from "./TodoItem";

export const TodoList = ({ todoList, toggleTodoListItemStatus, deleteTodoListItem, title, as , fontSize, mt}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <TodoTitle fontSize={fontSize} title={title} as={as} mt={mt} />
          <List w="full">
            {todoList.map((todo) => (
              <TodoItem 
              key={todo.id} 
              todo={todo} 
              toggleTodoListItemStatus={toggleTodoListItemStatus} 
              deleteTodoListItem={deleteTodoListItem} />
            ))}
          </List>
        </>
      )}
    </>
  )
};