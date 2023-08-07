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
  const [changeOpen, setChangeOpen] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    const { modification } = e.target.elements;
    const MODIFY = "MODIFY";
    const todo = {
      todo: {
        id: id,
        text: modification.value,
        done: done,
      },
    };
    const actionModify = (todo) => ({ type: MODIFY, todo });
    dispatch(actionModify(todo.todo));

    setChangeOpen(true);
  };

  const onToggle = async () => {
    dispatch({ type: "TOGGLE", id });
    async function fetchData(url, method, data) {
      try {
        const options = {
          method,
          headers: {
            "Content-Type": "application/json",
          },
        };
        if (data) {
          options.body = JSON.stringify(data);
        }
        const response = await fetch(url, options);
        //method, headers, body 순으로 객체에 담아서 호출
        const result = await response.json();
        return result;
      } catch (error) {
        console.error("Error occurred:", error.message);
        throw error;
      }
    }
    try {
      const putData = {
        id: nextId.current,
        done: done,
      };
      const data = await fetchData("/api/todo", "PUT", putData);
      console.log(data);
    } catch (error) {
      console.error("Error occurred:", error.message);
      throw error;
    }
  };

  const onRemove = async () => {
    dispatch({ type: "REMOVE", id });

  const onModify = () => {
    setChangeOpen(!changeOpen);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
      <CheckCircle $done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text $done={done}>
        {changeOpen ? (
          text
        ) : (
          <ChangeForm onSubmit={onSubmit}>
            <ModificationInput
              autoFocus
              placeholder="수정할 Text값을 입력 후, Enter를 누르세요"
              type="text"
              name="modification"
            ></ModificationInput>
          </ChangeForm>
        )}
      </Text>
      <Modification onClick={onModify}>
        <MdRefresh />
      </Modification>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
export default React.memo(TodoItem);

