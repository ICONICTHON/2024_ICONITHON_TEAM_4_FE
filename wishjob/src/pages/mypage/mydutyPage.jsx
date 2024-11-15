import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/header";
import BackButton from "../../component/mypage/backbutton";
import SaveButtonComponent from "../../component/mypage/savebutton";
import { useLocation } from "react-router-dom";
import axios from "../../axios";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  width: 88vw;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #ffffff;
  font-family: "SCDream4", sans-serif;

  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;
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

const jobsLeft = [
  "기획·전략",
  "인사·HR",
  "마케팅·광고·MD",
  "디자인",
  "운전·운송·배송",
  "고객상담·TM",
  "식·음료",
  "엔지니어링·설계",
  "교육",
  "의료·바이오",
  "공공·복지",
];
const jobsRight = [
  "고객상담·TM",
  "법무·사무·총무",
  "회계·세무",
  "개발·데이터",
  "물류·무역",
  "영업",
  "금융·보험",
  "고객서비스·리테일",
  "제조·생산",
  "건축·시설",
  "미디어·문화·스포츠",
];

const ItemInput = styled.input`
  cursor: pointer;
  &:checked {
    accent-color: #f49c00;
    border-color: white;
  }
`;

const JobSelectionPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [location]);

  const [duties, setDuty] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`user/json/${userId}`);
        setDuty(response.data.companies_of_interest);
        console.log(response.data.companies_of_interest);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header>나 JOB알아봐라</Header>
      <Container visible={isVisible}>
        <BackButton />
        <Title>관심 직무</Title>
        <JobSelectionContainer>
          <Column>
            {jobsLeft.map((job, index) => (
              <JobCheckbox key={index}>
                <ItemInput type="checkbox" id={`job-${index}`} />
                <label htmlFor={`job-${index}`}>{job}</label>
              </JobCheckbox>
            ))}
          </Column>
          <Column>
            {jobsRight.map((job, index) => (
              <JobCheckbox key={index}>
                <ItemInput
                  type="checkbox"
                  id={`job-${index + jobsLeft.length}`}
                />
                <label htmlFor={`job-${index + jobsLeft.length}`}>{job}</label>
              </JobCheckbox>
            ))}
          </Column>
        </JobSelectionContainer>
      </Container>
      <SaveButtonComponent />
    </Wrapper>
  );
};

export default JobSelectionPage;
