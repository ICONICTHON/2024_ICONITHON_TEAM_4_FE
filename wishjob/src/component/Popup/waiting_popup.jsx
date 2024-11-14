// WaitingPopup.jsx
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
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  background-color: #ffd700;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8; /* 마우스 올렸을 때 흐려짐 */
  }
`;

const CancelButton = styled.button`
  background-color: #ccc;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8; /* 마우스 올렸을 때 흐려짐 */
  }
`;

const WaitingPopup = ({ onClose, onConfirm }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <div>
          <h3>기업 이름의</h3>
          <p>
            예상 대기 시간은 <span style={{ color: "red" }}>30분</span> 입니다.
          </p>
          <p>대기 하시겠습니까?</p>
          <ButtonContainer>
            <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
            <CancelButton onClick={onClose}>취소</CancelButton>
          </ButtonContainer>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default WaitingPopup;