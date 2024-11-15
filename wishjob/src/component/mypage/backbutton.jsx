// backbutton.jsx
import React from "react";
import styled from "styled-components";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: calc(60px + 2vh);
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 4px;
  color: #333;
`;

function BackButton({ label = "마이페이지" }) {
  const navigate = useNavigate();

  return (
    <ButtonWrapper onClick={() => navigate("/mypage")}>
      <IoChevronBackOutline size={24} color="#000" />
      <Label>{label}</Label>
    </ButtonWrapper>
  );
}

export default BackButton;
