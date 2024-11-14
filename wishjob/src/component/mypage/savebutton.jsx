// SaveButtonComponent.jsx
import React, { useState } from "react";
import styled from "styled-components";
import SavePopup from "../Popup/save_popup";

const SaveButtonContainer = styled.div`
  display: flex;
  width: 88vw;
  margin-top: 2vh;
  margin-left: 6vw;
`;

const SaveButton = styled.button`
  width: 100%;
  height: 32px;
  background-color: #f49c00;
  color: #000;
  font-weight: bold;
  font-size: 15px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-family: SCDream4;
  box-shadow: 2px 2px 2px #00000040;
  &:hover,
  &:active {
    transform: scale(0.96);
    transition: transform 0.2s ease;
  }
`;

const SaveButtonComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSaveClick = () => {
    setIsPopupOpen(true); // 팝업 열기
  };

  const closePopup = () => {
    setIsPopupOpen(false); // 팝업 닫기
  };

  return (
    <>
      <SaveButtonContainer>
        <SaveButton onClick={handleSaveClick}>저장</SaveButton>
      </SaveButtonContainer>
      {isPopupOpen && <SavePopup onClose={closePopup} />}{" "}
      {/* SavePopup을 조건부로 렌더링 */}
    </>
  );
};

export default SaveButtonComponent;
