import React from 'react';
import styled from 'styled-components';
import Header from '../../component/header/header';
import BackButton from '../../component/mypage/backbutton';

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

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-top: 0px;
`;

const JobSelectionContainer = styled.div`
  width: 100%;
  height: 360px;
  background: rgba(217, 217, 217, 0.2);
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  box-sizing: border-box;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const JobCheckbox = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #000;

  input {
    margin-right: 10px;
  }
`;

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 20px 0 0;
`;

const SaveButton = styled.button`
  width: 130px;
  height: 35px;
  margin-right: 15px;
  background-color: #f49c00;
  color: #000;
  font-weight: bold;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const jobsLeft = ["기획·전략", "인사·HR", "마케팅·광고·MD", "디자인", "운전·운송·배송", "고객상담·TM", "식·음료", "엔지니어링·설계", "교육", "의료·바이오", "공공·복지"];
const jobsRight = ["고객상담·TM", "법무·사무·총무", "회계·세무", "개발·데이터", "물류·무역", "영업", "금융·보험", "고객서비스·리테일", "제조·생산", "건축·시설", "미디어·문화·스포츠"];

const JobSelectionPage = () => {
  return (
    <div>
        <Header>나 JOB알아봐라</Header>
        <Container>
        <BackButton />
        <Title>관심 직무</Title>
        <JobSelectionContainer>
            <Column>
            {jobsLeft.map((job, index) => (
                <JobCheckbox key={index}>
                <input type="checkbox" id={`job-${index}`} />
                <label htmlFor={`job-${index}`}>{job}</label>
                </JobCheckbox>
            ))}
            </Column>
            <Column>
            {jobsRight.map((job, index) => (
                <JobCheckbox key={index}>
                <input type="checkbox" id={`job-${index + jobsLeft.length}`} />
                <label htmlFor={`job-${index + jobsLeft.length}`}>{job}</label>
                </JobCheckbox>
            ))}
            </Column>
        </JobSelectionContainer>
        <SaveButtonContainer>
          <SaveButton>저장</SaveButton>
        </SaveButtonContainer>
        </Container>
    </div>
  );
};

export default JobSelectionPage;
