import React from "react";
import { TodoTemplateBlock } from "../styled/Styled";
import Logout from "./Logout";

function TodoTemplate({ children }) {
  return (
    <>
      <Logout></Logout>
      <TodoTemplateBlock>{children}</TodoTemplateBlock>
    </>
  );
}

export default TodoTemplate;
