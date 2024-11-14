// ForCompany_reservation_style.jsx
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "SCDream4";
  flex-direction: column;
  align-items: center;
  padding: 60px;
  background-color: #f9f9f9;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 1rem;
  }
`;

// 아이콘과 제목을 수평으로 정렬하기 위한 컨테이너
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 90vw;
  max-width: 500px;
  padding: 16px;

`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;