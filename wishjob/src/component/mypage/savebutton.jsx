// SaveButtonComponent.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import SavePopup from "../Popup/save_popup";

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
      {isPopupOpen && <SavePopup onClose={closePopup} />} {/* SavePopup을 조건부로 렌더링 */}
    </>
  );
};

export default SaveButtonComponent;
