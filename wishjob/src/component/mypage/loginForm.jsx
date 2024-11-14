import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./loginFormStyle";
import axios from "../../axios";

export default function LoginForm() {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user_id, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const [userType, setUserType] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/users/login/`, {
        user_id,
        password,
      });

      if (response.status === 200) {
        setUserType(response.data.user_type);
        console.log("User Type:", response.data);
        alert("로그인이 성공적으로 완료되었습니다.");
        nav("/main", { state: response.data.user_type });
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <S.Wrapper>
        <S.InfoContainer>
          <S.Info
            placeholder="아이디(이메일)"
            type="text"
            value={user_id}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.PasswordContainer>
            <S.Info
              placeholder="비밀번호"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.TogglePasswordButton onClick={togglePasswordVisibility}>
              {showPassword ? "가리기" : "보기"}
            </S.TogglePasswordButton>
          </S.PasswordContainer>
        </S.InfoContainer>
        <S.InfoContainer>
          <S.LoginButton type="submit" value="로그인" />
          <S.NavSignUp onClick={() => nav("/signup")}>회원가입</S.NavSignUp>
        </S.InfoContainer>
      </S.Wrapper>
    </form>
  );
}
