import React from "react";
import { LoginRedirectButton } from "../components/LoginRedirectButton";
import {
  AuthGlobalStyle,
  AuthBackground,
  AuthTitle,
  Logo,
  AuthLoginContainer,
  AlignContainer,
} from "../styled/AuthStyled";
import { AuthForm } from "../components/AuthForm";

function AuthPage() {
  return (
    <>
      <AuthGlobalStyle />
      <AuthBackground>
        <Logo>호벌TodoList</Logo>
        <AuthLoginContainer>
          <AuthTitle>회원가입</AuthTitle>
          <AlignContainer>
          </AlignContainer>
        </AuthLoginContainer>
      </AuthBackground>
    </>
  );
}

export default AuthPage;
