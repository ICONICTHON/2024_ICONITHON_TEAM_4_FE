// waitinglist_style.jsx
import styled from "styled-components";

export const TeamListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  padding-top:20px;
  width: 100%;
  margin: 10px;
  max-width: 600px; /* 너비 확대 */
  max-height: 500px; /* 높이 설정 */
  overflow-y: auto; /* 내용이 많을 때 스크롤 활성화 */
`;

export const TeamItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const TeamInfo = styled.div`
  font-size: 12px;
  color: #333;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 4px;
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
 &:active,&:hover {
    opacity: 0.8; /* 마우스 올렸을 때 흐려짐 */
    transform: scale(0.98); /* 클릭 시 크기를 줄여 눌러진 느낌을 줌 */
    transition: transform 0.1s ease;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 12px;
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
  display: flex;
  align-items: center;
  &:active,&:hover {
    opacity: 0.8; /* 마우스 올렸을 때 흐려짐 */
    transform: scale(0.98); /* 클릭 시 크기를 줄여 눌러진 느낌을 줌 */
    transition: transform 0.1s ease;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;

export const Icon = styled.span`
  margin-left: 4px;
  display: inline-flex;
  vertical-align: middle;
  &:active,&:hover {
    opacity: 0.8; /* 마우스 올렸을 때 흐려짐 */
    transform: scale(0.98); /* 클릭 시 크기를 줄여 눌러진 느낌을 줌 */
    transition: transform 0.1s ease;
  }
`;
