import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;

const LogoutButton = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const AppHeader = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    async function fetchData(url, method) {
      try {
        const options = {
          method,
          credentials: "include",
          header: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
      } catch (error) {
        console.error("Error occured", error.message);
        throw error;
      }
    }

    try {
      const data = await fetchData(
        `https://api.todo-app.kro.kr/signout`,
        "POST"
      );
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error("Error Occured");
      throw error;
    }
  };

  return (
    <HeaderContainer>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </HeaderContainer>
  );
};

export default AppHeader;
