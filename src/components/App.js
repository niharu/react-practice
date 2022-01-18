import React, { useRef } from "react";
import { Container, Flex, Box, Spacer } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { TodoAdd } from "./TodoAdd";
import { TodoTitle } from "./TodoTitle";
import { TodoList } from "./TodoList";
import { SignInScreen } from "./SignInScreen";
import { Login } from "./Login";

import { useEffect } from "react";
import { useTodo } from "../hooks/useTodo";
import { useAuthState } from "../hooks/useAuthState";

function App() {
  const {
    todoList,
    getTodoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
    updateTodoContent
  } = useTodo();

  const { loading, isSignedIn, user } = useAuthState();

  useEffect(() => {
    if (user!==null) {
      getTodoList(user);
    }
  }, [user, getTodoList]);

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;

    addTodoListItem(inputEl.current.value, user.uid);
    inputEl.current.value = "";
  };

  return (
    <Container p={{ base: "4", md: "6" }} maxWidth="3xl">
      <Flex>
        <Box>
          <TodoTitle title="Todoリスト" as="h1"
            fontSize={{ base: "2xl", md: "3xl" }} />
        </Box>
        <Spacer />
        <Box>
          <Login loading={loading} isSignedIn={isSignedIn} user={user} />
        </Box>
      </Flex>

      {isSignedIn &&
        <>
          <TodoAdd
            placeholder="Add Todo"
            leftIcon={<AddIcon />}
            inputEl={inputEl}
            handleAddTodoListItem={handleAddTodoListItem}
            buttonText="Todoを追加" />
          <TodoList
            todoList={todoList}
            toggleTodoListItemStatus={toggleTodoListItemStatus}
            deleteTodoListItem={deleteTodoListItem}
            updateTodoContent={updateTodoContent}
          />
        </>

      }
      <SignInScreen />
    </Container>
  );
}

export default App;