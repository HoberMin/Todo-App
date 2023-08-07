import React from "react";
import { MdDone, MdDelete } from "react-icons/md";
// 아이콘 모듈
import { Remove, TodoItemBlock, CheckCircle, Text } from "../styled/Styled";

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
