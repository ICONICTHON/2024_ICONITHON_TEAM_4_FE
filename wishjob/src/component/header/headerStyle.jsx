import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 60px;
  background-color: #f49c00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

export const Text = styled.div`
  font-size: 24px;
  font-family: "Typo";
  font-weight: bold;
  cursor: pointer;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  margin-left: 16px;
`;

export const UserIcon = styled.div`
  cursor: pointer;
  margin-right: 16px;
`;
