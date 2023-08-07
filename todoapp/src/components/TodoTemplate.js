import React from "react";
import { TodoTemplateBlock } from "../styled/Styled";

function TodoTemplate({ children }) {
  return <TodoTemplateBlock> {children} </TodoTemplateBlock>;
}

export default TodoTemplate;
