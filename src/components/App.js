import React, { useRef } from "react";
import { Container, Flex, Box, Spacer } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { TodoAdd } from "./TodoAdd";
import { TodoTitle } from "./TodoTitle";
import { TodoList } from "./TodoList";
import { SignInScreen } from "./SignInScreen";
import { Login } from "./Login";

import { useEffect } from "react";
import { useState } from "react";
import { useTodo } from "../hooks/useTodo";
import { useAuthState } from "../hooks/useAuthState";
import { Clips } from "./Clips";
import { useClip } from "../hooks/useClip";
import { AddClip } from "./AddClips";
import { IncrementalSearch } from "./IncrementalSearch";

function App() {
  const {
    todoList,
    getTodoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
    updateTodoContent
  } = useTodo();

  const {
    clips,
    searchClips,
    addClip,
    filterClips,
    filteredClips
  } = useClip();

  const [searchWord, setSearchWord] = useState('');

  const { loading, isSignedIn, user } = useAuthState();

  const handleChangeSearchWord = (e) => {
    setSearchWord(e.target.value);
    filterClips(e.target.value);
  };

  const category = "Linux";

  useEffect(() => {
    if (user !== null) {
      getTodoList(user);
    }
  }, [user, getTodoList]);

  useEffect(() => {
    searchClips(category);
  }, [category, searchClips]);

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;

    addTodoListItem(inputEl.current.value, user.uid);
    inputEl.current.value = "";
  };

  console.log("clips:", clips);

  return (
    <Container p={{ base: "4", md: "6" }} maxWidth="3xl">

      <Flex>
        <Box>
          <TodoTitle title="Todoリスト" as="h1"
            fontSize={{ base: "2xl", md: "3xl" }} />
        </Box>
        <Spacer />
        <IncrementalSearch
          placeholder="検索"
          searchWord={searchWord}
          handleChangeSearchWord={handleChangeSearchWord}
        />
        <Spacer />
        {isSignedIn ?
          <AddClip addClip={addClip} />
          :
          <Box>
            <Login loading={loading} isSignedIn={isSignedIn} user={user} />
          </Box>
        }
      </Flex>

      <Clips clips={filteredClips} />

      <SignInScreen />
    </Container>
  );
}

export default App;