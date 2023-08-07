import React, { useState } from "react";
import { MdDone, MdDelete, MdRefresh } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../Context/TodoContext";
// 아이콘 모듈
import {
  Remove,
  ChangeForm,
  Modification,
  ModificationInput,
  TodoItemBlock,
  CheckCircle,
  Text,
} from "../styled/Styled";

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const onToggle = async () => {
    dispatch({ type: "TOGGLE", id });
  const onRemove = async () => {
    dispatch({ type: "REMOVE", id });

  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
      <CheckCircle $done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
        <MdRefresh />
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
