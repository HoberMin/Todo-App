import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthSignUpText } from "../styled/AuthStyled";

export function LoginRedirectButton() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };
  return (
    <AuthSignUpText onClick={onClick}>아이디가 있다면? 로그인</AuthSignUpText>
  );
}
