import React, { useState } from "react";
import { FiFileText } from "react-icons/fi";
import * as S from "./ComReservation_style";
import PopupResume from "../Popup/Company_resume"; // 팝업 컴포넌트 import

const TeamItemList = ({ setTeamCount }) => {
  // 더미 데이터 관리
  const [teams] = useState([
    { id: 1, name: "000", peopleCount: 0, resumeData: { name: "김도현", birthDate: "021213", phone: "010-1234-5678", education: { school: "학교 이름", department: "학과", graduationDate: "2025-03-01" }, careers: [{ id: 1, jobType: "풀타임", company: "회사명", startDate: "2021-01-01", endDate: "2023-01-01", responsibilities: "업무 내용" }], introduction: "자기소개 내용" }},
    { id: 2, name: "000", peopleCount: 0, resumeData: { name: "박영희", birthDate: "981231", phone: "010-9876-5432", education: { school: "학교 이름2", department: "학과2", graduationDate: "2024-12-01" }, careers: [{ id: 2, jobType: "인턴", company: "회사명2", startDate: "2020-01-01", endDate: "2020-06-01", responsibilities: "업무 내용2" }], introduction: "자기소개 내용2" }},
    // 추가 데이터
  ]);

  // 팝업 상태 관리
  const [selectedResume, setSelectedResume] = useState(null);

  const openResumePopup = (resumeData) => {
    setSelectedResume(resumeData); // 선택된 이력서 데이터를 저장
  };

  const closeResumePopup = () => {
    setSelectedResume(null); // 팝업 닫기
  };

  return (
    <div>
      <S.TeamListContainer>
        {teams.map((team, index) => (
          <S.TeamItem key={team.id}>
            <S.TeamInfo>
              {index + 1}. 이름 : {team.name} &nbsp; 인원: {team.peopleCount} 명
            </S.TeamInfo>
            <S.ResumeButton onClick={() => openResumePopup(team.resumeData)}>
              <FiFileText size={16} style={{ marginRight: "4px" }} />
              이력서
            </S.ResumeButton>
          </S.TeamItem>
        ))}
      </S.TeamListContainer>

      {/* 이력서 팝업 */}
      {selectedResume && (
        <PopupResume resumeData={selectedResume} onClose={closeResumePopup} />
      )}
    </div>
  );
};

export default TeamItemList;
