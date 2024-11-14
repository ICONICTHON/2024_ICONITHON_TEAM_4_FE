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

export const TeamListContainer = styled.div`
  display:flex;
  flex-direction:column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  margin : 10px;
  max-width: 600px; /* 너비 확대 */
  max-height: 500px; /* 높이 설정 */
  overflow-y: auto; /* 내용이 많을 때 스크롤 활성화 */
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

 @media (max-width: 768px) {
    gap: 4px;
  }
`;
export const TeamItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff; /* 배경 색상 통일 */
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const TeamInfo = styled.div`
  font-size: 12px;
  color: #333;
    @media (max-width: 768px) {
    font-size: 14px; /* 글자 크기 조정 */
  }
`;

export const ActionButton = styled.button`
  background-color: #f0a500;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  
@media (max-width: 768px) {
    padding: 4px 8px; /* 버튼 크기 줄이기 */
    font-size: 12px; /* 글자 크기 줄이기 */
  }
`;


export const DeleteButton = styled.button`
  background-color: #aaa;
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  margin-left: 8px;
  display: flex; // 아이콘과 텍스트가 정렬되도록 설정
  align-items: center; // 세로 중앙 정렬
@media (max-width: 768px) {
    padding: 4px 8px; /* 버튼 크기 줄이기 */
    font-size: 12px; /* 글자 크기 줄이기 */
  }
`;

export const MenuIcon = styled.div`
  color: #f0a500;
  font-size: 24px;
  margin-left: 8px;
`;
export const Icon = styled.span`
  margin-left: 4px; // 텍스트와 아이콘 사이 간격 조절
  display: inline-flex; // 아이콘이 inline 요소처럼 표시되도록 함
  vertical-align: middle; // 텍스트와 세로 정렬
`;
