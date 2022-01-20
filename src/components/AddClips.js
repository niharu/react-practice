import { Button, Select, Spacer, Text, Textarea, useDisclosure } from "@chakra-ui/react";

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { useRef, useState } from "react";

import React from 'react';

export const AddClip = ({addClip}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [category, setCategory] = useState("Linux");

  const commandRef = useRef(null);
  const descriptionRef = useRef(null);

  const categories = [
    {code: "Linux", name : "Linux"},
    {code: "Git", name : "Git"},
    {code: "Docker", name : "Docker"}
  ];

  const categoryOptions = [
    {value: "Linux", label : "Linux"},
    {value: "Git", label : "Git"},
    {value: "Docker", label : "Docker"}
  ];

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const options = categories.map((category) => (
    <option key={category.code} value={category.code}>{category.name}</option>
  ));

  console.log("category:",category);

  const handleClickSave = () => {
    console.log("category:",category);
    console.log("command.current.value:",commandRef.current.value);
    console.log("description.current.value:",descriptionRef.current.value);
    addClip(category, commandRef.current.value, descriptionRef.current.value);
  }

  return (
    <>
      <Button onClick={onOpen}>Add clip</Button>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Category</Text>
            <Select value={category} onChange={handleChangeCategory}>
              {options}
            </Select>
            <Text mt="3">Command</Text>
            <Textarea ref={commandRef} />
            <Text mt="3">Description</Text>
            <Textarea ref={descriptionRef} />
            <Button mt="3" onClick={handleClickSave}>Save</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};