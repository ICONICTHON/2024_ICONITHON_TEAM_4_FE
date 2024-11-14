import React, { useState } from "react";
import Header from "../component/header/header";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #ffffff;
  font-family: "SCDream4", sans-serif;
  padding-top: 60px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px auto;
  border-radius: 4px;
  border: 1px solid #f49c00;
  background-color: white;
  box-sizing: border-box;
`;

const PasswordMessage = styled.div`
  color: #fbc400;
  font-size: 12px;
  margin-top: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SignupButton = styled.button`
  width: 100%;
  height: 32px;
  background-color: #f49c00;
  border-radius: 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  font-family: SCDream5;
  box-shadow: 2px 2px 2px #00000040;
  &:hover,
  &:active {
    transform: scale(98%);
    transition: transform 0.1s ease;
  }
`;

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const isPasswordMatch =
    password && confirmPassword && password === confirmPassword;

  return (
    <div>
      <Header />
      <Container>
        <Title>회원 가입</Title>
        <FormGroup>
          <Label>아이디(이메일)</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>비밀번호</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword && (
            <PasswordMessage>
              {isPasswordMatch
                ? "비밀번호가 일치합니다!"
                : "비밀번호가 일치하지 않습니다."}
            </PasswordMessage>
          )}
        </FormGroup>
        <FormGroup>
          <Label>이름</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>전화번호</Label>
          <Input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>생년월일(6자리)</Label>
          <Input
            type="text"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </FormGroup>
        <ButtonContainer>
          <SignupButton>회원가입</SignupButton>
        </ButtonContainer>
      </Container>
    </div>
  );
}

export default SignupPage;
