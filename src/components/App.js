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
    deleteTodoListItem
  } = useTodo();

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;

    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  console.log("TODOリスト:", todoList);

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  console.log("未完了TODOリスト:", inCompletedList);

  const completedList = todoList.filter((todo) => {
    return todo.done; 
  });

  return (
    <Container centerContent p={{ base: "4", md: "6" }} maxWidth="31xl">
      <TodoTitle title="TODO進捗管理" as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}/>

      <TodoAdd 
      placeholder="ADD TODO"
      leftIcon={<AddIcon />}
      inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} buttonText="TODOを追加" />

      <TodoList 
      fontSize={{base:"xl",md:"2xl"}} mt="5"
      title="未完了TODOリスト" as="h2" todoList={inCompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />

      <TodoList 
      fontSize={{base:"xl",md:"2xl"}} mt="5"
      title="完了TODOリスト" as="h2" todoList={completedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
    </Container>
  );
}

export default App;