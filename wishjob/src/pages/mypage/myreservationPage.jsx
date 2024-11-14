import React, { useState } from 'react';
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

const TabBar = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ isActive }) => (isActive ? '#000' : '#888')};
  background-color: ${({ isActive }) => (isActive ? '#FBC400' : '#E0E0E0')};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d8b200;
  }
`;

const TabContent = styled.div`
  padding: 20px;
`;

const ReservationCard = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin: 0px 0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 5px 0;
`;

const CardDetails = styled.div`
  font-size: 14px;
`;

const QueueInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QueueText = styled.span`
  color: #000;
  font-size: 14px;
  margin-right: 10px;
`;

const RedText = styled.span`
  color: red;
  font-size: 14px;
`;

const DetailButton = styled.button`
  color: #306ED4;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
`;

const CancelButton = styled.button`
  background-color: #F49C00;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
`;

const BoothReservationPage = () => {
  const [activeTab, setActiveTab] = useState('progress');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header>나 JOB알아봐라</Header>
      <Container>
        <BackButton />
        <Title>예약 내역</Title>
        
        {/* Tab Bar */}
        <TabBar>
          <Tab isActive={activeTab === 'progress'} onClick={() => handleTabClick('progress')}>진행 전</Tab>
          <Tab isActive={activeTab === 'completed'} onClick={() => handleTabClick('completed')}>완료</Tab>
          <Tab isActive={activeTab === 'canceled'} onClick={() => handleTabClick('canceled')}>취소</Tab>
        </TabBar>

        {/* Tab Content */}
        <TabContent>
          {activeTab === 'progress' && (
            <ReservationCard>
              <CardHeader>
                <div>기업이름기업이름기업이름</div>
                <DetailButton>상세보기  </DetailButton>
              </CardHeader>
              <Divider />
              <CardDetails>이용 일시: 9/17(월) 09:17</CardDetails>
              <QueueInfo>
                <QueueText>내 앞 대기: <RedText>2팀</RedText></QueueText>
                <QueueText>예상 대기 시간: <RedText>30분</RedText></QueueText>
                <CancelButton>대기 취소</CancelButton>
              </QueueInfo>
            </ReservationCard>
          )}
          {activeTab === 'completed' && (
            <ReservationCard>
              <CardHeader>
                <div>기업이름기업이름기업이름</div>
                <DetailButton>상세보기 </DetailButton>
              </CardHeader>
              <Divider />
              <CardDetails>이용 일시: 9/17(월) 09:17</CardDetails>
              <div style={{ color: '#306ED4', fontWeight: 'bold' }}>완료</div>
            </ReservationCard>
          )}
          {activeTab === 'canceled' && (
            <ReservationCard>
              <CardHeader>
                <div>기업이름기업이름기업이름</div>
                <DetailButton>상세보기 </DetailButton>
              </CardHeader>
              <Divider />
              <CardDetails>이용 일시: 9/17(월) 09:17</CardDetails>
              <div style={{ color: 'red', fontWeight: 'bold' }}>취소 완료</div>
            </ReservationCard>
          )}
        </TabContent>
      </Container>
    </div>
  );
};

export default BoothReservationPage;
