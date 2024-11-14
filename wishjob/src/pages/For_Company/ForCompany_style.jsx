// ForCompany_style.jsx
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "SCDream4";
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 95vh; /* 화면 전체 높이를 덮도록 설정 */
  
  @media (max-width: 768px) { /* 모바일 화면을 위한 미디어 쿼리 */
    padding: 8px;
  }
`;


export const CompanyNameButton = styled.button`
  background-color: #f0a500;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 14px 0;
  border: none;
  cursor: pointer;
  margin-top:70px;
`;

export const SubHeader = styled.div`
  color: #000;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const QueueInfoBox = styled.div`
  display: inline-flex;
  align-items: baseline;
  border: 1px solid #f0a500;
  border-radius: 8px;
  padding: 15px;
  margin-top:10px;
  margin-bottom: 10px;
  color: black;
  font-size: 14px;
  padding-right:25px;
  padding-left:25px;
  padding-bottom:20px;
  
  @media (max-width: 768px) {
    font-size: 16px; /* 모바일 화면에서 글자 크기 줄이기 */
    padding: 8px;
  }
`;

export const QueueCount = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #f0a500; /* 숫자 색상만 금색으로 설정 */
  line-height: 1; /* 숫자의 라인 높이를 줄여 아래로 맞춤 */
  margin-left: 4px;
`;

export const QueueLabel = styled.span`
  font-size: 14px; /* '팀' 글자 크기 설정 */
  color: black;
  line-height: 1; /* 숫자의 라인 높이를 줄여 아래로 맞춤 */
  margin-left: 4px;
`;
export const MenuIcon = styled.div`
  color: #f0a500;
  font-size: 24px;
  margin-left: 8px;
`;

