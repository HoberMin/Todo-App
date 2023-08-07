import styled, { createGlobalStyle } from "styled-components";
import "../App.css";

export const AuthGlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export const AuthBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const AuthTitle = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
  font-size: xx-large;
  font-weight: 700;
  color: white;
`;

export const Logo = styled.div`
  position: absolute;
  width: 120px;
  height: 80px;
  top: 50px;
  left: 50px;
  background-color: transparent;
`;

export const AuthBtn = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 20px;
  border-radius: 5px;
  color: ${(props) => props.$textColor};
  background-color: ${(props) => props.$backColor};
  font-size: large;
  padding: ${(props) => props.padding};
`;

export const AuthLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  width: 280px;
  height: 350px;
  border-radius: 10px;
  padding: 70px;
  background-color: black;
`;

export const AlignContainer = styled.div`
  display: flex;
  align-items: center; /* 수평으로 가운데 정렬 */
  flex-direction: column;
`;

export const AuthTextInput = styled.input`
  width: 280px;
  height: 40px;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 8px;
  font-family: ${(props) => props.font || "Arial, sans-serif"};
  color: black; /* 입력한 텍스트의 색상 */
  font-size: 21px;
  &::placeholder {
    color: black; /* placeholder의 글씨 색상 */
  }
`;

export const AuthSignUpText = styled.div`
  color: white;
  font-size: small;
  margin-top: 20px;
  text-decoration: underline;
  cursor: pointer;
`;
