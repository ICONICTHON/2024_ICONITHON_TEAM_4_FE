// MyPage.jsx
import React from "react";
import styled from "styled-components";
import Header from "../component/header/header";
import { IoMenu } from "react-icons/io5";
import { TbUserSquareRounded } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  font-family: "SCDream4", sans-serif;
  padding: 10px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-top: 20px;
`;

const MenuIcon = styled.div`
  cursor: pointer;
`;

const UserIcon = styled.div`
  cursor: pointer;
`;

const ListContainer = styled.div`
  margin-top: 20px;
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
  cursor: ${(props) => (props.logout ? "pointer" : "default")};
`;

export default function MyPage() {
  return (
    <Container>
      <Header>
        <MenuIcon>
          <IoMenu size={28} />
        </MenuIcon>
        <Title>나 JOB알아봐라</Title>
        <UserIcon>
          <TbUserSquareRounded size={28} />
        </UserIcon>
      </Header>
      
      <ListContainer>
        <Title>마이페이지</Title>
        <ListItem>
          예약 내역 <FaChevronRight />
        </ListItem>
        <ListItem>
          MY 정보 <FaChevronRight />
        </ListItem>
        <ListItem>
          MY 관심 직무 <FaChevronRight />
        </ListItem>
        <ListItem>
          MY 이력서 <FaChevronRight />
        </ListItem>
        <ListItem logout>
          로그 아웃 <FiLogOut />
        </ListItem>
      </ListContainer>
    </Container>
  );
}
