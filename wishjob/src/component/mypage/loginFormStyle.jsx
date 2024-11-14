import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: SCDream4;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

export const Info = styled.input`
  width: 64vw;
  height: 32px;
  border-radius: 8px;
  border: solid 2px #fbc400;
  background-color: white;
  padding-right: 40px; /* 아이콘 공간 확보 */
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const TogglePasswordButton = styled.span`
  position: absolute;
  right: 2vw;
  top: 50%;
  transform: scale(0.96);
  transition: transform 0.2s ease;
  cursor: pointer;
  font-size: 10px;
`;

export const LoginButton = styled.div`
  width: 64vw;
  height: 32px;
  border-radius: 16px;
  background-color: #f49c00;
  text-align: center;
  line-height: 32px;
  box-shadow: 2px 2px 2px #00000040;
  cursor: pointer;
  &:hover,
  &:active {
    transform: scale(0.96);
    opacity: 0.8;
    transition: transform 0.2s ease;
  }
`;

export const NavSignUp = styled.div`
  text-decoration: underline;
  font-size: 10px;
  cursor: pointer;
  &:hover,
  &:active {
    transform: scale(0.92);
    transition: transform 0.2s ease;
  }
`;
