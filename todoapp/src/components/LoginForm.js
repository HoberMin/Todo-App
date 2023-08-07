import React from "react";
import { useAuthState } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { AuthBtn, AuthTextInput } from "../styled/AuthStyled";

export function LoginForm() {
  const state = useAuthState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, pw } = e.target.elements;

    if (id.value.length < 5) {
      alert("ID는 5글자 이상이어야 합니다.");
      return; // 유효성 검사 실패 시 함수 실행 중지
    }

    // PW 유효성 검사
    const pwRegex = /^(?=.*[a-z])(?=.*\d).{8,}$/; // 8글자 이상의 소문자와 숫자를 포함한 문자열 검사용 정규식
    if (!pwRegex.test(pw.value)) {
      alert("PW는 8글자 이상의 소문자와 숫자를 포함해야 합니다.");
      return; // 유효성 검사 실패 시 함수 실행 중지
    }

  return (
    <form onSubmit={handleSubmit}>
      <AuthTextInput
        type="text"
        placeholder="아이디 입력"
        font="HakgyoansimWoojuR, sans-serif"
        name="id"
      />
      <AuthTextInput
        type="password"
        placeholder="비밀번호 입력"
        font="HakgyoansimWoojuR, sans-serif"
        name="pw"
      />

      <AuthBtn $textColor="white" $backColor="red" type="submit">
        {" "}
        로그인
      </AuthBtn>
    </form>
  );
}
