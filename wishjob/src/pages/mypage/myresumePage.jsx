import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/header";
import BackButton from "../../component/mypage/backbutton";
import SaveButtonComponent from "../../component/mypage/savebutton";
import { FaPlus, FaTrash } from "react-icons/fa";
import axios from "../../axios";

// Styled components
const Container = styled.div`
  width: 88vw;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #ffffff;
  font-family: "SCDream4", sans-serif;
  gap: 12px;
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
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

const InputField = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  border: 1px solid #a39890;
  border-radius: 8px;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const InfoText = styled.span`
  display: block;
  background: #e8e8e8;
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  border: 1px solid #a39890;
  border-radius: 8px;
  padding: 0 10px;
  box-sizing: border-box;
  color: #555;
`;

const SelectField = styled.select`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  border: 1px solid #a39890;
  border-radius: 8px;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #000;
  margin-bottom: 5px;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 5px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #a39890;
  border-radius: 8px;
  padding: 5px;
  box-sizing: border-box;
`;

const InfoGroup = styled.div`
  flex: 1;
`;

const PlusButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  font-size: 15px;
  color: #f49c00;
  margin-right: 10px;
  margin-bottom: 5px;
  gap: 5px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const CareerItem = styled.div`
  background: #fff7cc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const CareerField = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 12px;
`;

const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -5px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #f41000;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const ResumePage = () => {
  const [careers, setCareers] = useState([]);
  const [jobType, setJobType] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const addCareer = () => {
    // Check if all fields are filled
    if (!jobType || !company || !startDate || !endDate || !responsibilities) {
      return;
    }
    const newCareer = {
      id: Date.now(),
      jobType,
      company,
      startDate,
      endDate,
      responsibilities,
    };
    setCareers([...careers, newCareer]);
    setJobType("");
    setCompany("");
    setStartDate("");
    setEndDate("");
    setResponsibilities("");
  };

  // Check if the add button should be enabled
  const isAddDisabled =
    !jobType || !company || !startDate || !endDate || !responsibilities;

  const deleteCareer = (id) => {
    setCareers(careers.filter((career) => career.id !== id));
  };

  const [name, setName] = useState("");
  const [birth, setBirth] = useState(new Date().toLocaleDateString());
  const [phone, setPhone] = useState("");

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`user/json/${userId}`);
        setName(response.data.username);
        setBirth(response.data.birth);
        setPhone(response.data.phoneNum);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
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
              <InfoText>{name}</InfoText>
            </InfoGroup>
            <InfoGroup>
              <Label>생년월일</Label>
              <InfoText>{birth}</InfoText>
            </InfoGroup>
          </Row>
          <InfoGroup>
            <Label>전화번호</Label>
            <InfoText>{phone}</InfoText>
          </InfoGroup>
        </SectionContainer>

        {/* Section: Education */}
        <SectionContainer>
          <Title>학력</Title>
          <InputField placeholder="학교를 입력해 주세요." />
          <InputField placeholder="학과를 입력해 주세요." />
          <InfoGroup>
            <Label>졸업예정일</Label>
            <InputField type="date" />
          </InfoGroup>
        </SectionContainer>

        {/* Section: Career Details */}
        <SectionContainer>
          <Title>경력 사항</Title>
          <SelectField
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">근무 형태를 선택해주세요.</option>
            <option value="풀타임">풀타임</option>
            <option value="파트타임">파트타임</option>
            <option value="인턴">인턴</option>
            <option value="자격증">자격증</option>
          </SelectField>
          <InputField
            placeholder="근무한 직장을 입력해 주세요."
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <InputField
            placeholder="담당업무와 내용을 입력하세요. (50자 이내)"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            maxLength="50"
          />
          <Row>
            <InfoGroup>
              <Label>시작일</Label>
              <InputField
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </InfoGroup>
            <InfoGroup>
              <Label>종료일</Label>
              <InputField
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </InfoGroup>
          </Row>
          <PlusButton onClick={addCareer} disabled={isAddDisabled}>
            <FaPlus />
          </PlusButton>

          {/* Career List */}
          {careers.length > 0 &&
            careers.map((career) => (
              <CareerItem key={career.id}>
                <CareerField>
                  <Label>근무 형태:</Label>
                  <span>{career.jobType}</span>
                </CareerField>
                <CareerField>
                  <Label>회사명:</Label>
                  <span>{career.company}</span>
                </CareerField>
                <CareerField>
                  <Label>근무 기간:</Label>
                  <span>
                    {career.startDate} ~ {career.endDate}
                  </span>
                </CareerField>
                <CareerField>
                  <Label>담당 업무:</Label>
                  <span>{career.responsibilities}</span>
                </CareerField>
                <DeleteButtonContainer>
                  <DeleteButton onClick={() => deleteCareer(career.id)}>
                    <FaTrash /> 삭제
                  </DeleteButton>
                </DeleteButtonContainer>
              </CareerItem>
            ))}
        </SectionContainer>

        {/* Section: Self Introduction */}
        <SectionContainer>
          <Title>자기 소개 (500자)</Title>
          <Textarea placeholder="자기 소개를 입력해 주세요." />
        </SectionContainer>
      </Container>
      <SaveButtonComponent />
    </Wrapper>
  );
};

export default ResumePage;
