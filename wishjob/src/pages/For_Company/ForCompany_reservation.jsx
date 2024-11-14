// ForCompany_reservation.jsx
import React from "react";
import { IoChevronBack } from "react-icons/io5"; // 아이콘 임포트
import Header from "../../component/header/header";
import * as S from "./ForCompany_reservation_style";
import TeamItemList from "../../component/Com_Reservation/ComReservation";
import { useNavigate } from "react-router-dom";

const ForCompany_reservation = () => {
    const nav = useNavigate();
    return (
      <>
        <Header />
        <S.Container>
          <S.TitleContainer>
            <S.BackIcon>
              <IoChevronBack onClick={() => nav("/main")} size={24} style={{ marginRight: "8px" }} />
            </S.BackIcon>
            <S.Title>상담완료 내역</S.Title>
          </S.TitleContainer>
          <TeamItemList />
        </S.Container>
      </>
    );
  };
  
export default ForCompany_reservation;
