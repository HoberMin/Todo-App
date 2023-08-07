import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthSignUpText } from "../styled/AuthStyled";

export function AuthRedirectButton() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/Signup");
  };
  return (
    <AuthSignUpText onClick={onClick}>아이디가 없다면? 회원가입</AuthSignUpText>
  );
}
