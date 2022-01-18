import { List } from "@chakra-ui/react";

import { TodoItem } from "./TodoItem";

export const TodoList = ({ todoList, toggleTodoListItemStatus, deleteTodoListItem, updateTodoContent }) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <List w="full" mt="3">
            {todoList.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
                updateTodoContent={updateTodoContent}
              />
            ))}
          </List>
        </>
      )}
    </>
  )
};