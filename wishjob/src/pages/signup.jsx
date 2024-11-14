import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "../axios";

const Container = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;

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

const SignupButton = styled.input`
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
  const [full_name, setName] = useState("");
  const [phoneNum, setPhone] = useState("");
  const [birth, setBirthDate] = useState("");

  const isPasswordMatch =
    password && confirmPassword && password === confirmPassword;

  const nav = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [location]);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/users/signup/`, {
        email,
        password,
        full_name,
        phoneNum,
        birth,
      });

      if (response.status === 201) {
        alert("회원가입이 성공적으로 완료되었습니다.");
        nav("/main"); // 회원가입 성공 시 메인 페이지로 이동
      }
    } catch (error) {
      if (error.response) {
        // 서버에서 응답이 왔지만, 500 오류가 발생한 경우
        console.error("서버 오류 응답:", error.response.data);
        alert("서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
      } else if (error.request) {
        // 요청이 전송되었으나 응답을 받지 못한 경우
        console.error("서버 응답 없음:", error.request);
        alert(
          "네트워크 문제로 서버에 접속할 수 없습니다. 인터넷 연결을 확인해주세요."
        );
      } else {
        // 그 외 오류 발생
        console.error("오류:", error.message);
        alert("알 수 없는 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <Container visible={isVisible}>
      <Title>회원 가입</Title>
      <form onSubmit={handleSignup}>
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
            value={full_name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>전화번호</Label>
          <Input
            type="text"
            value={phoneNum}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>생년월일(6자리)</Label>
          <Input
            type="date"
            value={birth}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </FormGroup>
        <ButtonContainer>
          <SignupButton type="submit" value={"회원가입"} />
        </ButtonContainer>
      </form>
    </Container>
  );
}

export default SignupPage;
