import React, { createContext, useReducer, useContext, useEffect } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "MODIFY":
      return state.map((todo) =>
        todo.id === action.todo.id
          ? { ...todo, content: action.todo.content }
          : todo
      );
    case "SET":
      return action.todo;
    default:
      throw new Error(`unhandled action type : ${action.type}`);
  }
}
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, []);
  useEffect(() => {
    fetch("https://api.todo-app.kro.kr/todos", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET", todo: data.todos });
      });
  }, []);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error(`Cannot find TodoProvider`);
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
