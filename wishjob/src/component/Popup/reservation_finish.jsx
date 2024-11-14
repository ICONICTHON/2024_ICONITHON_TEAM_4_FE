import React from "react";
import styled from "styled-components";

// 스타일 컴포넌트 정의
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 300px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  background-color: #ffd700;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.1s ease; /* 트랜지션 추가 */

  &:hover {
    opacity: 0.8; /* 마우스 올렸을 때 흐려짐 */
  }

  &:active {
    transform: scale(0.95); /* 클릭 시 크기를 줄여 눌러진 느낌 */
  }
`;

const ReservationFinish = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalBody>
          <h3>기업 이름</h3>
          <p>예약이 완료 되었습니다.</p>
          <p>한 팀 남을 시 안내 문자가 발송됩니다.</p>
        </ModalBody>
        <ButtonContainer>
          <ConfirmButton onClick={onClose}>확인</ConfirmButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ReservationFinish;
