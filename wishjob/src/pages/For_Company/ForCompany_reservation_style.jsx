import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "SCDream4";
  flex-direction: column;
  align-items: center;
  padding: 80px;
  background-color: #f9f9f9;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    padding: 70px;
    font-size: 1rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center;
  position: relative;
  width: 90vw;
  max-width: 500px;
  padding: 0; /* padding 제거 */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 0; /* 제목 위아래 여백 제거 */
  line-height: 1.2; /* 텍스트 줄 높이 조정으로 아이콘과 균형 맞춤 */

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BackIcon = styled.div`
  position: absolute;
  left: 0;
  top: 50%; /* 부모 요소의 중앙에 위치 */
  transform: translateY(-50%); /* 수직 중앙 정렬 */
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

