import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../Context/TodoContext";
import {
  CircleButton,
  InsertFormPositioner,
  InsertForm,
  Input,
} from "../styled/Styled";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onSubmit = async (e) => {
    const { inputValue } = e.target.elements;
    //이벤트로 받아옴
    e.preventDefault();

    const CREATE = "CREATE";
    const todo = {
      todo: {
        id: nextId.current,
        text: inputValue.value,
        done: false,
      },
    };

    const actionCreate = (todo) => ({ type: CREATE, todo });
    dispatch(actionCreate(todo.todo));

    setOpen(false);
    nextId.current += 1;

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요"
              type="text"
              name="inputValue"
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
