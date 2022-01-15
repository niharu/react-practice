import React, { useRef } from "react";

import { Container } from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";

import { useTodo } from "../hooks/useTodo";

import { TodoAdd } from "./TodoAdd";

import { TodoTitle } from "./TodoTitle";

import { TodoList } from "./TodoList";


function App() {

  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
    updateTodoContent
  } = useTodo();

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;

    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  console.log("todoList:", todoList);

  return (
    <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
      <TodoTitle title="TODOリスト" as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}/>

      <TodoAdd 
      placeholder="ADD TODO"
      leftIcon={<AddIcon />}
      inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} buttonText="TODOを追加" />

      <TodoList 
      fontSize={{base:"xl",md:"2xl"}}
      title="TODOリスト" as="h2" 
      todoList={todoList} 
      toggleTodoListItemStatus={toggleTodoListItemStatus} 
      deleteTodoListItem={deleteTodoListItem} 
      updateTodoContent={updateTodoContent}
      />
    </Container>
  );
}

export default App;