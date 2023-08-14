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
    e.preventDefault();

    const CREATE = "CREATE";
    const todo = {
      todo: {
        id: nextId.current,
        content: inputValue.value,
        checked: false,
      },
    };

    const actionCreate = (todo) => ({ type: CREATE, todo });
    dispatch(actionCreate(todo.todo));

    setOpen(false);
    nextId.current += 1;

    async function fetchData(url, method, data) {
      try {
        const options = {
          method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        };
        if (data) {
          options.body = JSON.stringify(data);
        }
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
      } catch (error) {
        console.error("Error occurred:", error.message);
        throw error;
      }
    }

    try {
      const postData = {
        id: nextId.current,
        content: inputValue.value,
        checked: false,
      };
      const data = await fetchData(
        "https://api.todo-app.kro.kr/todo",
        "POST",
        postData
      );
      console.log(data);
    } catch (error) {
      console.error("Error occurred:", error.message);
      throw error;
    }
  };
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
