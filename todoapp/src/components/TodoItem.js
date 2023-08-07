import React from "react";
import { MdDone, MdDelete } from "react-icons/md";
import React, { useState } from "react";
import { MdDone, MdDelete, MdRefresh } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../Context/TodoContext";
// 아이콘 모듈
import { Remove, TodoItemBlock, CheckCircle, Text } from "../styled/Styled";

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        {done && <MdDone />}
        <MdRefresh />
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
