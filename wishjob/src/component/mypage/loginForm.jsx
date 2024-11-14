import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./loginFormStyle";

export default function LoginForm() {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <S.Wrapper>
      <S.InfoContainer>
        <S.Info placeholder="아이디(이메일)" type="text" />
        <S.PasswordContainer>
          <S.Info
            placeholder="비밀번호"
            type={showPassword ? "text" : "password"}
          />
          <S.TogglePasswordButton onClick={togglePasswordVisibility}>
            {showPassword ? "가리기" : "보기"}
          </S.TogglePasswordButton>
        </S.PasswordContainer>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.LoginButton onClick={() => nav("/main")}>로그인</S.LoginButton>
        <S.NavSignUp onClick={() => nav("/signup")}>회원가입</S.NavSignUp>
      </S.InfoContainer>
    </S.Wrapper>
  );
}
