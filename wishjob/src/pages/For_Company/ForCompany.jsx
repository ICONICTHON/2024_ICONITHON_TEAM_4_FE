// ForCompany.jsx
import React, { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5"; // 아이콘 변경
import { AiOutlineDelete } from "react-icons/ai"; // 아이콘 변경
import { FiFileText } from "react-icons/fi";
import HeaderCompany from "../../component/header/headerCompany";
import * as S from "./ForCompany_style";
import { useLocation } from "react-router-dom";
import TeamItemList from "../../component/WaitingList/waiting_list";

const ForCompany = () => {
  // 대기 팀 수를 상태로 관리
  const [teamCount, setTeamCount] = useState(0);

  return (
    <>
      <HeaderCompany />
      <S.Container>
        <S.CompanyNameButton>기업 이름</S.CompanyNameButton>
        <S.SubHeader>담당자: 000</S.SubHeader>
        <S.QueueInfoBox>
          현재 대기 인원&nbsp;&nbsp;
          <S.QueueCount>{teamCount}</S.QueueCount> {/* teamCount로 표시 */}
          <S.QueueLabel>팀</S.QueueLabel>
        </S.QueueInfoBox>
        <TeamItemList setTeamCount={setTeamCount} />{" "}
        {/* setTeamCount를 TeamItemList에 전달 */}
      </S.Container>
    </>
  );
};

export default ForCompany;
