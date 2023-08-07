import React from "react";
import Todo from "./pages/Todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import { AuthProvider } from "./Context/AuthContext";
import LoginPage from "./pages/LoginPage";
import AuthPage from "./pages/AuthPage";

function App() {
  const isAuthenticated = true;
  /*
  지금 로그인 false라 /todo로 접근이 불가능하다.
  true로 변경하면 /todo페이지에 접근이 가능하다.
   */

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Signup" element={<AuthPage />} />
          <Route
            path="Todo"
            element={isAuthenticated ? <Todo /> : <LoginPage />}
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
