// ComReservation_style.jsx
import styled from "styled-components";

export const TeamListContainer = styled.div`
  background-color: #f4f4f4;
  font-family: "SCDream4";
  border-radius: 8px;
  padding: 16px;
  width: 90%;
  max-width: 500px;
  min-height: 70vh;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;

export const TeamItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 10px;

  /* 모바일에서도 가로 정렬 유지 */
  @media (max-width: 768px) {
    flex-direction: row; /* 항상 가로 정렬 유지 */
  }
`;

export const TeamInfo = styled.div`
  font-size: 1rem;
  color: #333;
  flex: 1; /* TeamInfo가 남은 공간을 채우도록 설정 */

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ResumeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #f0a500;
  color: white;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 5px 8px;
  }
`;