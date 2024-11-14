import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/header/header';
import BackButton from '../../component/mypage/backbutton';
import { FaPlus, FaTrash } from 'react-icons/fa';

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
  padding: 15px 20px;
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

const InfoGroup = styled.div`
  flex: 1;
`;

const PlusButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  font-size: 20px;
  color: #f49c00;
  margin-top: -10px;
  gap: 5px;
`;

const CareerTable = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #f41000;
  cursor: pointer;
  font-size: 16px;
`;

const ResumePage = () => {
  const [careers, setCareers] = useState([]);
  const [jobType, setJobType] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const addCareer = () => {
    const newCareer = {
      id: Date.now(),
      jobType,
      company,
      startDate,
      endDate,
    };
    setCareers([...careers, newCareer]);
    setJobType('');
    setCompany('');
    setStartDate('');
    setEndDate('');
  };

  const deleteCareer = (id) => {
    setCareers(careers.filter((career) => career.id !== id));
  };

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
          <InfoGroup>
              <Label>졸업예정일</Label>
              <InputField type="date" />
          </InfoGroup>
        </SectionContainer>

        {/* Section: Career Details */}
        <SectionContainer>
          <Title>경력 사항</Title>
          <SelectField value={jobType} onChange={(e) => setJobType(e.target.value)}>
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
          <Row>
            <InfoGroup>
              <Label>시작일</Label>
              <InputField type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </InfoGroup>
            <InfoGroup>
              <Label>종료일</Label>
              <InputField type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </InfoGroup>
          </Row>
          <PlusButton onClick={addCareer}>
            <FaPlus /> 추가
          </PlusButton>

          {/* Career Table */}
          {careers.length > 0 && (
            <CareerTable>
              <thead>
                <tr>
                  <th>근무 형태</th>
                  <th>근무한 직장</th>
                  <th>시작일</th>
                  <th>종료일</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {careers.map((career) => (
                  <TableRow key={career.id}>
                    <TableCell>{career.jobType}</TableCell>
                    <TableCell>{career.company}</TableCell>
                    <TableCell>{career.startDate}</TableCell>
                    <TableCell>{career.endDate}</TableCell>
                    <TableCell>
                      <DeleteButton onClick={() => deleteCareer(career.id)}>
                        <FaTrash /> 삭제
                      </DeleteButton>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </CareerTable>
          )}
        </SectionContainer>

        {/* Section: Self Introduction */}
        <SectionContainer>
          <Title>자기 소개 (500자)</Title>
          <Textarea placeholder="자기 소개를 입력해 주세요." />
        </SectionContainer>

        {/* Section: Save Button */}
        <SaveButtonContainer>
          <SaveButton>저장</SaveButton>
        </SaveButtonContainer>
      </Container>
    </div>
  );
};

export default ResumePage;
