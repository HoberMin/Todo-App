import React from "react";
import { useTodoState } from "../Context/TodoContext";
import { TodoHeadBlock } from "../styled/Styled";

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  return (
    <TodoHeadBlock>
      <div className="tasks-left">할일 남은 개수 : {undoneTasks.length} </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
