import React, { useState } from "react";
import { MdDone, MdDelete, MdRefresh } from "react-icons/md";
import { useTodoDispatch } from "../Context/TodoContext";
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

function TodoItem({ id, checked, content }) {
  const dispatch = useTodoDispatch();

  const [changeOpen, setChangeOpen] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { modification } = e.target.elements;
    const MODIFY = "MODIFY";
    const todo = {
      todo: {
        id: id,
        content: modification.value,
        checked: checked,
      },
    };
    const actionModify = (todo) => ({ type: MODIFY, todo });
    dispatch(actionModify(todo.todo));
    setChangeOpen(true);

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
      const putData = {
        content: modification.value,
        id: id,
        checked: checked,
      };

      const data = await fetchData(
        `https://api.todo-app.kro.kr/todo/${putData.id}`,
        "PUT",
        putData
      );
      console.log(data);
    } catch (error) {
      console.error("Error occurred:", error.message);
      throw error;
    }
  };

  const onToggle = () => {
    dispatch({ type: "TOGGLE", id });
  };

  const onRemove = async () => {
    dispatch({ type: "REMOVE", id });

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
      const deleteData = {
        id: id,
      };
      const data = await fetchData(
        `https://api.todo-app.kro.kr/todo/${deleteData.id}`,
        "DELETE",
        deleteData
      );
      console.log(data);
    } catch (error) {
      console.error("Error occurred:", error.message);
      throw error;
    }
  };

  const onModify = () => {
    setChangeOpen(!changeOpen);
  };

  return (
    <TodoItemBlock>
      <CheckCircle $done={checked} onClick={onToggle}>
        {checked && <MdDone />}
      </CheckCircle>
      <Text $checked={checked}>
        {changeOpen ? (
          content
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

export default React.memo(TodoItem);
