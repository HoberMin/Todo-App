import React from "react";
import { MdAdd } from "react-icons/md";

import {
  CircleButton,
  InsertFormPositioner,
  InsertForm,
  Input,
} from "../styled/Styled";

function TodoCreate() {
  return (
    <>
      <InsertFormPositioner>
        <InsertForm>
          <Input />
        </InsertForm>
      </InsertFormPositioner>
      <CircleButton>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
