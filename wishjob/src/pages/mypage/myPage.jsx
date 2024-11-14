import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../component/header/header";
import { FiLogOut } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;

  width: 100%;
  margin: 0 auto;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #ffffff;
  font-family: "SCDream4", sans-serif;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-top: 80px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => (props.logout ? "#f41000" : "#000000")};
  cursor: pointer;
`;

const MyPage = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "예약 내역", path: "/myreservation", icon: <FaChevronRight /> },
    { text: "MY 정보", path: "/myinfo", icon: <FaChevronRight /> },
    { text: "MY 관심 직무", path: "/myduty", icon: <FaChevronRight /> },
    { text: "MY 이력서", path: "/myresume", icon: <FaChevronRight /> },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <div>
      <Header />
      <Container visible={isVisible}>
        <Title>마이페이지</Title>
        {menuItems.map((item, index) => (
          <ListItem key={index} onClick={() => handleNavigation(item.path)}>
            {item.text} {item.icon}
          </ListItem>
        ))}
        <ListItem logout onClick={() => handleNavigation("/")}>
          로그 아웃 <FiLogOut />
        </ListItem>
      </Container>
    </div>
  );
};

export default MyPage;
