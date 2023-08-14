import React from "react";
import { useAuthDispatch } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { AuthBtn, AuthTextInput } from "../styled/AuthStyled";

export function AuthForm() {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, pw, verification } = e.target.elements;

    const isVerification = pw.value === verification.value;

    if (isVerification) {
      dispatch({ type: "SIGNUP", auth: { id: id.value, pw: pw.value } });
    } else {
      alert("pw와 pw확인이 일치하지 않습니다.");
      return;
    }

    if (id.value.length < 5) {
      alert("ID는 5글자 이상이어야 합니다.");
      return; // 유효성 검사 실패 시 함수 실행 중지
    }

    const pwRegex = /^(?=.*[a-z])(?=.*\d).{8,}$/; // 8글자 이상의 소문자와 숫자를 포함한 문자열 검사용 정규식
    if (!pwRegex.test(pw.value)) {
      alert("PW는 8글자 이상의 소문자와 숫자를 포함해야 합니다.");
      return; // 유효성 검사 실패 시 함수 실행 중지
    }

    async function fetchData(url, method, data) {
      try {
        const options = {
          method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        };
        if (data) {
          options.body = JSON.stringify(data);
        }
        const response = await fetch(url, options);
        //method, headers, body 순으로 객체에 담아서 호출
        const result = await response.json();
        return result;
      } catch (error) {
        console.error("Error occurred:", error.message);
        throw error;
      }
    }

    try {
      const postData = {
        id: id.value,
        pw: pw.value,
        pwconfirm: verification.value,
      };
      const data = await fetchData(
        "https://api.todo-app.kro.kr/signup",
        "POST",
        postData
      );
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error("데이터가져오기 오류");
    }
  };

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
      <AuthTextInput
        type="password"
        placeholder="비밀번호 확인"
        font="HakgyoansimWoojuR, sans-serif"
        name="verification"
      />

      <AuthBtn $textColor="white" $backColor="red" type="submit">
        {" "}
        회원가입
      </AuthBtn>
    </form>
  );
}
