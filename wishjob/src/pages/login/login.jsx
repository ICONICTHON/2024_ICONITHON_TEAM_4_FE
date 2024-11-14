import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./loginStyle";
import Logo from "../../component/mypage/loginLogo";
import LoginForm from "../../component/mypage/loginForm";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <div>
      <S.Wrapper>
        <S.Container visible={isVisible}>
          <Logo />
          <LoginForm />
        </S.Container>
      </S.Wrapper>
    </div>
  );
}
