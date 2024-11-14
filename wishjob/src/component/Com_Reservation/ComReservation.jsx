// ComReservation.jsx
import React, { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import * as S from "./ComReservation_style";

const TeamItemList = ({ setTeamCount }) => {
  // 더미 데이터 관리
  const [teams, setTeams] = useState([
    { name: "000", peopleCount: 0 },
    { name: "000", peopleCount: 0 },
    { name: "000", peopleCount: 0 },
    { name: "000", peopleCount: 0 },
  ]);

  return (
    <S.TeamListContainer>
      {teams.map((team, index) => (
        <S.TeamItem key={index}>
          <S.TeamInfo>
            {index + 1}. 이름 : {team.name} &nbsp; 인원: {team.peopleCount} 명
          </S.TeamInfo>
          <S.ResumeButton><FiFileText size={16} style={{ marginRight: "4px" }} />이력서</S.ResumeButton>
        </S.TeamItem>
      ))}
    </S.TeamListContainer>
  );
};

export default TeamItemList;