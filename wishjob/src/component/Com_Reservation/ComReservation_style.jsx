import styled from "styled-components";

export const TeamListContainer = styled.div`
  background-color: #f4f4f4;
  font-family: "SCDream4";
  border-radius: 0.8vw;
  padding: 1vw;
  width: 80vw;
  max-width: 500px;
  min-height: 80vh; /* 전체 높이 조금 줄임 */

  @media (max-width: 768px) {
    padding: 3vw;
    width: 90vw;
  }
`;

export const TeamItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vw;
  border: 0.1vw solid #333;
  border-radius: 0.8vw;
  background-color: #fff;
  margin-bottom: 1vw;
  gap: 0.8vw;

  @media (max-width: 768px) {
    padding: 1.5vw;
    gap: 1vw;
  }
`;

export const TeamInfo = styled.div`
  font-size: 0.9vw; /* 텍스트 크기를 더 줄임 */
  color: #333;
  flex: 1;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

export const ResumeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0a500;
  color: white;
  padding: 0.4vw 1vw; /* 버튼 크기 조정 */
  border-radius: 0.8vw;
  font-size: 0.8vw; /* 텍스트 크기 축소 */
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.1s ease, opacity 0.1s ease;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
    transform: scale(0.96);
  }

  @media (max-width: 768px) {
    font-size: 2vw;
    padding: 1vw 2vw;
  }
`;
