import styled from "styled-components";

export const Wrapper = styled.div`
  width: 88vw;
  height: 50vh;
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
`;

export const BoothNum = styled.div`
  margin-left: 8px;
`;
export const BoothCate = styled.div``;
export const BoothName = styled.div`
  margin-right: 8px;
`;
