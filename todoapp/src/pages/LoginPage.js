import React from "react";
import { AuthRedirectButton } from "../components/AuthRedirectButton";
import {
  AuthGlobalStyle,
  AuthBackground,
  AuthTitle,
  Logo,
  AuthLoginContainer,
  AlignContainer,
} from "../styled/AuthStyled";
import { LoginForm } from "../components/LoginForm";

function LoginPage() {
  return (
    <>
      <AuthGlobalStyle />
      <AuthBackground>
        <Logo>호벌TodoList</Logo>
        <AuthLoginContainer>
          <AuthTitle>로그인</AuthTitle>
          <AlignContainer>
            <LoginForm />
            <AuthRedirectButton />
          </AlignContainer>
        </AuthLoginContainer>
      </AuthBackground>
    </>
  );
}

export default LoginPage;
