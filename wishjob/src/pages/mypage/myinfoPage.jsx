import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/header";
import BackButton from "../../component/mypage/backbutton";
import { useLocation } from "react-router-dom";
import axios from "../../axios";

const Container = styled.div`
  width: 88vw;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #ffffff;
  font-family: "SCDream4", sans-serif;

  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-top: 0px;
`;

const InfoGroup = styled.div`
  width: 285px;
  margin: 10px auto;
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #888;
  margin-bottom: 5px;
`;

const InfoText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

function MyInfoPage() {
  // 예시 데이터 객체

  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [location]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState(new Date().toLocaleDateString());

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`user/json/${userId}`);
        setName(response.data.username);
        setPhone(response.data.phoneNum);
        setBirth(response.data.birth);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const userInfo = {
    "아이디(이메일)": userId,
    이름: name,
    전화번호: phone,
    "생년월일(6자리)": birth,
  };

  return (
    <div>
      <Header />
      <Container visible={isVisible}>
        <BackButton />
        <Title>MY 정보</Title>
        {Object.entries(userInfo).map(([label, value]) => (
          <InfoGroup key={label}>
            <Label>{label}</Label>
            <InfoText>{value}</InfoText>
          </InfoGroup>
        ))}
      </Container>
    </div>
  );
}

export default MyInfoPage;
