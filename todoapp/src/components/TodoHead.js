import React from "react";
import { useTodoState } from "../Context/TodoContext";
import { TodoHeadBlock } from "../styled/Styled";

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <h1>{dayName}</h1>
      <div className="day">{dateString}</div>
      <div className="tasks-left">할일 남은 개수 : {undoneTasks.length} </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
