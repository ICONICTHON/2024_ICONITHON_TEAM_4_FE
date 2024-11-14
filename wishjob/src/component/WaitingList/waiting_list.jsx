// waiting_list.jsx
import React, { useState, useEffect } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import * as S from "./waiting_list_style";

const TeamItemList = ({ setTeamCount }) => {
  // props로 setTeamCount 받기
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

  // teams 배열의 길이를 ForCompany에 전달
  useEffect(() => {
    setTeamCount(teams.length); // 팀 수를 업데이트
  }, [teams, setTeamCount]); // teams가 변경될 때마다 호출

  return (
    <S.TeamListContainer>
      {teams.map((team, index) => (
        <S.TeamItem key={index}>
          <S.TeamInfo>
            {index + 1}. 이름 : {team.name} &nbsp; 인원 : {team.peopleCount}명
          </S.TeamInfo>
          <div>
            <S.ButtonContainer>
              <S.ActionButton>
                완료{" "}
                <S.Icon>
                  <IoCheckmarkCircleOutline />
                </S.Icon>
              </S.ActionButton>
              <S.DeleteButton>
                삭제{" "}
                <S.Icon>
                  <AiOutlineDelete />
                </S.Icon>
              </S.DeleteButton>
              <S.Icon>
                <FiFileText size={24} color="#f0a500" />
              </S.Icon>
            </S.ButtonContainer>
          </div>
        </S.TeamItem>
      ))}
    </S.TeamListContainer>
  );
};

export default TeamItemList;
