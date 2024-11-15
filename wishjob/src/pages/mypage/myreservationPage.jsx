import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/header";
import BackButton from "../../component/mypage/backbutton";
import { useNavigate } from "react-router-dom";
import WaitingCancelPopup from "../../component/Popup/waitingcancel_popup";
import { useLocation } from "react-router-dom";
import axios from "../../axios";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;

  align-items: center;
  background-color: #ffffff;
  font-family: "SCDream4", sans-serif;
  max-height: 100vh;
  overflow: hidden;
  width: 100vw;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: center;
  padding-top: 2vh;
`;

const TabBar = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding-top: 2vh;
  margin-left: 6%;
  width: 88%;
`;

const Tab = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 15px;
  color: ${({ isActive }) => (isActive ? "#000" : "#888")};
  background-color: ${({ isActive }) => (isActive ? "#FBC400" : "#E0E0E0")};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: SCDream4;
  overflow-y: auto;

  &:hover {
    background-color: #d8b200;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  background-color: #f0f0f0;
  margin-top: 2vh;
  padding: 2vh;
  border-radius: 8px;
  max-height: 62vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-left: 6%;
  width: 84%;
`;

const Layout = styled.div`
  margin-left: 6%;
`;
const ReservationCard = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
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
  font-size: 14px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 5px 0;
`;

const CardDetails = styled.div`
  font-size: 12px;
`;

const QueueInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QueueText = styled.span`
  font-size: 12px;
  margin-right: 10px;
`;

const RedText = styled.span`
  color: red;
  font-size: 12px;
`;

const DetailButton = styled.button`
  color: #306ed4;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-family: SCDream4;
  text-decoration: underline;
`;

const CancelButton = styled.button`
  background-color: #f49c00;
  border: none;
  border-radius: 12px;
  padding: 4px;
  font-size: 10px;
  cursor: pointer;
  font-family: SCDream4;
  box-shadow: 1px 1px 1px #00000040;
  &:hover,
  &active {
    opacity: 0.8;
    transform: scale(0.96);
    transition: transform 0.2s ease;
  }
`;

const BoothReservationPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [reservations, setReservations] = useState([]);
  const [isWaitingModalOpen, setIsWaitingModalOpen] = useState(false);

  // 모달 열기 및 닫기 함수
  const openWaitingModal = () => setIsWaitingModalOpen(true);
  const closeWaitingModal = () => setIsWaitingModalOpen(false);

  const userId = localStorage.getItem("userId");
  const [userBoothList, setUBL] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`user/json/${userId}`);
        setUBL(response.data.reservation_status);
        console.log(response.data.reservation_status);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const filteredReservations = userBoothList.filter(
    (reservation) => reservation.doneType === activeTab
  );

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <Wrapper>
      <Header />
      <Container visible={isVisible}>
        <Layout>
          <BackButton />
        </Layout>
        <Title>예약 내역</Title>

        {/* Tab Bar */}
        <TabBar>
          <Tab isActive={activeTab === 0} onClick={() => handleTabClick(0)}>
            진행 전
          </Tab>
          <Tab isActive={activeTab === 2} onClick={() => handleTabClick(2)}>
            완료
          </Tab>
          <Tab isActive={activeTab === 1} onClick={() => handleTabClick(1)}>
            취소
          </Tab>
        </TabBar>

        {/* Tab Content */}
        <TabContent>
          {filteredReservations.map((reservation) => (
            <ReservationCard key={reservation.id}>
              <CardHeader>
                <div>{reservation.boothName}</div>
                <DetailButton onClick={() => navigate("/company_info")}>
                  상세보기
                </DetailButton>
              </CardHeader>
              <Divider />
              {reservation.doneType === 0 && (
                <QueueInfo>
                  <QueueText>
                    내 앞 대기:{" "}
                    <RedText>{reservation.position_in_queue}팀</RedText>
                  </QueueText>
                  <QueueText>
                    예상 대기 시간:{" "}
                    <RedText>{reservation.position_in_queue * 10}분</RedText>
                  </QueueText>
                  <CancelButton onClick={openWaitingModal}>
                    대기 취소
                  </CancelButton>
                  {/* 대기 모달 */}
                  {isWaitingModalOpen && (
                    <WaitingCancelPopup onClose={closeWaitingModal} />
                  )}
                </QueueInfo>
              )}
              {reservation.doneType === 2 && (
                <div style={{ color: "#306ED4", fontWeight: "bold" }}>완료</div>
              )}
              {reservation.doneType === 1 && (
                <div style={{ color: "red", fontWeight: "bold" }}>
                  취소 완료
                </div>
              )}
            </ReservationCard>
          ))}
        </TabContent>
      </Container>
    </Wrapper>
  );
};

export default BoothReservationPage;
