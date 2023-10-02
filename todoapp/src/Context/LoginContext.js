import React, { createContext, useState, useContext, useEffect } from "react";

const LoginStateContext = createContext();

export function LoginProvider({ children }) {
  const [login, setLogin] = useState(undefined);
  useEffect(() => {
    fetch("https://api.todo-app.kro.kr/check", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setLogin(data);
      });
  }, []);
  return (
    <LoginStateContext.Provider value={login}>
      {children}
    </LoginStateContext.Provider>
  );
}

export function useLoginState() {
  const context = useContext(LoginStateContext);
  return context;
}
