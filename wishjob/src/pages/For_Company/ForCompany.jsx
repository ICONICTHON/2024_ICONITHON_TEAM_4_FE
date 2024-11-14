// ForCompany.jsx
import React, { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5"; // 아이콘 변경
import { AiOutlineDelete } from "react-icons/ai"; // 아이콘 변경
import { FiFileText } from "react-icons/fi";
import Header from "../../component/header/header";
import * as S from "./ForCompany_style";
import { useLocation } from "react-router-dom";

const ForCompany = () => {
  const [teams, setTeams] = useState([
    { name: "프론트", peopleCount: 3 },
    { name: "백", peopleCount: 2 },
    { name: "이름", peopleCount: 0 },
    { name: "이름", peopleCount: 0 },
    { name: "이름", peopleCount: 0 },
    { name: "이름", peopleCount: 0 },
    { name: "이름", peopleCount: 0 },
    { name: "이름", peopleCount: 0 },
    { name: "이름", peopleCount: 0 },

  ]);

  return (
    <>
      <Header />
      <S.Container>
        <S.CompanyNameButton>기업 이름</S.CompanyNameButton>
        <S.SubHeader>담당자: 000</S.SubHeader>
        <S.QueueInfoBox>
          현재 대기 인원&nbsp;&nbsp;
          <S.QueueCount>{teams.length}</S.QueueCount>
          <S.QueueLabel>팀</S.QueueLabel>
        </S.QueueInfoBox>
        <S.TeamListContainer>
          {teams.map((team, index) => (
            <S.TeamItem key={index}>
              <S.TeamInfo>
                {index + 1}. 이름 : {team.name} &nbsp; 인원 : {team.peopleCount}명
              </S.TeamInfo>
              <div>
                <S.ButtonContainer>
                  <S.ActionButton>완료 <S.Icon><IoCheckmarkCircleOutline /></S.Icon></S.ActionButton>
                  <S.DeleteButton>삭제 <S.Icon><AiOutlineDelete /></S.Icon></S.DeleteButton>
                  <S.Icon><FiFileText size={24} color="#f0a500" /></S.Icon> {/* 이력서 아이콘 추가 */}
                </S.ButtonContainer>
              </div>
            </S.TeamItem>
          ))}
        </S.TeamListContainer>
      </S.Container>
    </>
  );
};

export default ForCompany;

