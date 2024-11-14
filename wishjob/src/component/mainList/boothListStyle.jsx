import styled from "styled-components";

export const Wrapper = styled.div`
  width: 88vw;
  max-height: 40vh;
  overflow-y: auto;
  background-color: #f0f0f0;
  border-radius: 12px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  padding-top: 4%;
  padding-bottom: 4%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  width: 92%;
  background-color: white;
  border: solid 2px #306ed4;
  color: black;
  border-radius: 4px;
  font-family: SCDream4;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 12px;

  &:hover,
  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
`;

export const BoothNum = styled.div`
  margin-left: 8px;
`;
export const BoothCate = styled.div``;
export const BoothName = styled.div`
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 8px;
`;
