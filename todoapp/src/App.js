import Todo from "./pages/Todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import AuthPage from "./pages/AuthPage";
import { LoginProvider } from "./Context/LoginContext";

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Signup" element={<AuthPage />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
