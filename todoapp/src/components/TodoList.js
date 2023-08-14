import React from "react";
import TodoItem from "./TodoItem";
import { useTodoState } from "../Context/TodoContext";
import { TodoListBlock } from "../styled/Styled";

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          content={todo.content}
          checked={todo.checked}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
