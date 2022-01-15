import { doc } from "firebase/firestore";
import { useState, useEffect } from "react";

import { ulid } from "ulid";

import * as todoData from "../api/todos";

export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    todoData.getAllTodosDataFirebase().then((resultTodoList) => {
      setTodoList([...resultTodoList].reverse());
    });
  }, []);

  const toggleTodoListItemStatus = (id, done) => {
    const todo = todoList.find((todo) => todo.id === id);
    const newTodoItem = {...todo, done: !done};

    todoData.updateTodoDataFirebase(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((todo) =>
        todo.id !== updatedTodo.id ? todo : updatedTodo
      );
      setTodoList(newTodoList);
    });
  };

  const updateTodoContent = (id, todoContent) => {
    const doc = todoList.find((doc) => doc.id === id);
    const newTodoItem = { ...doc, content: todoContent };

    todoData.updateTodoDataFirebase(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) =>
        item.id !== updatedTodo.id ? item : updatedTodo
      );
      setTodoList(newTodoList);
    });
  };

  const addTodoListItem = (todoContent) => {
    const newTodoItem = {
      content: todoContent,
      id: ulid(),
      done: false
    };

    return todoData.addTodoDataFirebase(newTodoItem).then((addTodo) => {
      setTodoList([addTodo, ...todoList]);
    });
  };

  const deleteTodoListItem = (id) => {
    todoData.deleteTodoData(id).then((deleteListItemId) => {
      const newTodoList = todoList.filter(
        (item) => item.id !== deleteListItemId
      );

      setTodoList(newTodoList);
    });
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
    updateTodoContent
  };
};