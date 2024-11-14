import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "SCDream4";
  flex-direction: column;
  align-items: center;
  padding: 4vw;
  background-color: #f9f9f9;
  font-size: 1rem; /* 기본 글꼴 크기를 조금 줄임 */

  @media (max-width: 768px) {
    padding: 13vw;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80vw;
  max-width: 500px;
  padding-top: 30px;
  margin-bottom: 1.5vw; /* 더 작은 여백 */

  @media (max-width: 768px) {
    margin-bottom: 6vw;
  }
`;

export const Title = styled.h2`
  font-size: 2vw; /* 텍스트 크기를 더 줄임 */
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

export const BackIcon = styled.div`
  position: absolute;
  left: 2vw;
  top: 50%;
  padding-top: 30px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  font-size: 1.8vw; /* 아이콘 크기도 조정 */
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 4.5vw;
  }
`;
