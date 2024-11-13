import React from 'react';
import styled from 'styled-components';
import Header from '../component/header/header';
import BackButton from '../component/mypage/backbutton';

// Styled components
const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #ffffff;
  font-family: "SCDream4", sans-serif;
`;

const HeadTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-top: 0px;
`;

const SectionContainer = styled.div`
  background: #fbc400;
  border-radius: 10px;
  margin: 10px 20px;
  padding: 15px;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #888;
  margin-bottom: 5px;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  border: 1px solid #a39890;
  border-radius: 8px;
  padding: 5px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px; /* Increase the gap to add more spacing */
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #a39890;
  border-radius: 8px;
  padding: 5px;
`;

const SaveButton = styled.button`
  width: 100px;
  height: 35px;
  background-color: #f49c00;
  color: #000;
  font-weight: bold;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: block;
  margin: 20px auto;
`;

const InfoGroup = styled.div`
  flex: 1;
`;


const ResumePage = () => {
  return (
    <div>
    <Header />
    <Container>
        <BackButton />
        <HeadTitle>이력서</HeadTitle>

        {/* Section: Member Information */}
        <SectionContainer>
          <Title>회원 정보</Title>
          <Row>
            <InfoGroup>
              <Label>이름</Label>
              <InputField value="김도현" disabled />
            </InfoGroup>
            <InfoGroup>
              <Label>생년월일(6자리)</Label>
              <InputField value="021213" disabled />
            </InfoGroup>
          </Row>
          <InfoGroup>
            <Label>전화번호</Label>
            <InputField value="010-1234-5678" disabled />
          </InfoGroup>
        </SectionContainer>

        {/* Section: Education */}
        <SectionContainer>
          <Title>학력</Title>
          <InputField placeholder="학교를 입력해 주세요." />
          <InputField placeholder="학과를 입력해 주세요." />
          <InputField type="date" placeholder="졸업 예정 일자를 선택해 주세요." />
        </SectionContainer>

        {/* Section: Career Details */}
        <SectionContainer>
          <Title>경력 사항</Title>
          <InputField placeholder="근무 형태를 선택해 주세요." />
          <InputField placeholder="근무한 직장을 입력해 주세요." />
          <Title>근무 기간</Title>
          <Row>
            <InputField type="date" placeholder="시작일" />
            <InputField type="date" placeholder="종료일" />
          </Row>
        </SectionContainer>

        {/* Section: Self Introduction */}
        <SectionContainer>
          <Title>자기 소개 (500자)</Title>
          <Textarea placeholder="자기 소개를 입력해 주세요." />
        </SectionContainer>

        <SaveButton>저장</SaveButton>
    </Container>
    </div>
  );
};

export default ResumePage;
