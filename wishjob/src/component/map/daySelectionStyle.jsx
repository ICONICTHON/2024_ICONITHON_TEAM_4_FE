import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #fbc400; // 전체 배경색
  height: 32px;
  border-radius: 16px;
  align-items: center;
`;

export const DayButton = styled.button`
  padding-right: 12px;
  padding-left: 12px;
  background-color: ${({ isSelected }) => (isSelected ? "#F49C00" : "#FBC400")};
  border: none;
  cursor: pointer;
  height: 32px;
  transition: background-color 0.1s;
  font-family: SCDream4;
  font-size: 12px;

  &:hover {
    background-color: #f49c00;
  }
  /* 양 끝 항목에만 border-radius 설정 */
  &:first-child {
    border-radius: 16px 0 0px 16px;
  }

  &:last-child {
    border-radius: 0 16px 16px 0;
  }
`;
