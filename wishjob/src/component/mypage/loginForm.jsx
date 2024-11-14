import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: SCDream4;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

const Info = styled.input`
  width: 64vw;
  height: 32px;
  border-radius: 8px;
  border: solid 2px #fbc400;
  background-color: white;
  padding-right: 40px; /* 아이콘 공간 확보 */
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const TogglePasswordButton = styled.span`
  position: absolute;
  right: 2vw;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 10px;
`;

const LoginButton = styled.div`
  width: 64vw;
  height: 32px;
  border-radius: 16px;
  background-color: #f49c00;
  text-align: center;
  line-height: 32px;
  box-shadow: 2px 2px 2px #00000040;
  cursor: pointer;
  &:hover,
  &:active {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
`;

const NavSignUp = styled.div`
  text-decoration: underline;
  font-size: 10px;
  cursor: pointer;
  &:hover,
  &:active {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
`;

export default function LoginForm() {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <InfoContainer>
        <Info placeholder="아이디(이메일)" type="text" />
        <PasswordContainer>
          <Info
            placeholder="비밀번호"
            type={showPassword ? "text" : "password"}
          />
          <TogglePasswordButton onClick={togglePasswordVisibility}>
            {showPassword ? "가리기" : "보기"}
          </TogglePasswordButton>
        </PasswordContainer>
      </InfoContainer>
      <InfoContainer>
        <LoginButton onClick={() => nav("/main")}>로그인</LoginButton>
        <NavSignUp onClick={() => nav("/signup")}>회원가입</NavSignUp>
      </InfoContainer>
    </Wrapper>
  );
}
