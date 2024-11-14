import React from "react";
import * as S from "./loginStyle";
import Logo from "../../component/mypage/loginLogo";
import LoginForm from "../../component/mypage/loginForm";

export default function Login() {
  return (
    <div>
      <S.Wrapper>
        <Logo />
        <LoginForm />
      </S.Wrapper>
    </div>
  );
}
