import React from "react";
import styled from "styled-components";

// 팝업 전체 오버레이 스타일
const Overlay = styled.div`
  position: fixed;
  top: 60px; /* 헤더 아래에서 시작 */
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

// 팝업 컨테이너 스타일
const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 2vw;
  width: 80vw;
  max-width: 600px;
  height: 75vh;
  max-height: 90vh;
  padding: 2vw;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90vw;
    height: 85vh;
    padding: 4vw;
  }
`;

// 팝업 내용 스타일
const ContentContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// X 닫기 버튼 스타일
const CloseButton = styled.button`
  position: absolute;
  top: 1vw;
  right: 1vw;
  background: none;
  border: none;
  font-size: 2vw;
  color: #888;
  cursor: pointer;
  &:hover {
    color: #333;
  }

  @media (max-width: 768px) {
    font-size: 5vw;
    top: 2vw;
    right: 2vw;
  }
`;

// 섹션 스타일
const Section = styled.div`
  margin-bottom: 2vw;
  padding: 1.5vw;
  border-radius: 1vw;
  background-color: #f9f9f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 3vw;
  }
`;

// 섹션 제목 스타일
const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 10px 0;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

// 내용 텍스트 스타일
const Text = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 3.5vw;
  }
`;

// 박스 스타일 (담당 업무와 자기 소개 부분에 사용)
const ContentBox = styled.div`
  background-color: #fff;
  padding: 1vw;
  border-radius: 1vw;
  border: 1px solid #ddd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-top: 1vw;

  @media (max-width: 768px) {
    padding: 3vw;
  }
`;

const PopupResume = ({ resumeData, onClose }) => {
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ContentContainer>
          <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333", fontSize: "1.5rem" }}>
            이력서
          </h2>

          {/* 회원 정보 섹션 */}
          <Section>
            <SectionTitle>회원 정보</SectionTitle>
            <Text>이름: {resumeData.name}</Text>
            <Text>생년월일: {resumeData.birthDate}</Text>
            <Text>전화번호: {resumeData.phone}</Text>
          </Section>

          {/* 학력 섹션 */}
          <Section>
            <SectionTitle>학력</SectionTitle>
            <Text>학교: {resumeData.education.school}</Text>
            <Text>학과: {resumeData.education.department}</Text>
            <Text>졸업예정일: {resumeData.education.graduationDate}</Text>
          </Section>

          {/* 경력 사항 섹션 */}
          <Section>
            <SectionTitle>경력 사항</SectionTitle>
            {resumeData.careers.length > 0 ? (
              resumeData.careers.map((career) => (
                <div key={career.id} style={{ marginBottom: "10px" }}>
                  <Text>근무 형태: {career.jobType}</Text>
                  <Text>회사명: {career.company}</Text>
                  <Text>근무 기간: {career.startDate} ~ {career.endDate}</Text>
                  <Text>담당 업무:</Text>
                  <ContentBox>{career.responsibilities}</ContentBox>
                </div>
              ))
            ) : (
              <Text>등록된 경력이 없습니다.</Text>
            )}
          </Section>

          {/* 자기 소개 섹션 */}
          <Section>
            <SectionTitle>자기 소개</SectionTitle>
            <ContentBox>{resumeData.introduction || "자기 소개 내용이 없습니다."}</ContentBox>
          </Section>
        </ContentContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default PopupResume;
