import React from "react";
import { useAuthDispatch } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { AuthBtn, AuthTextInput } from "../styled/AuthStyled";

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
