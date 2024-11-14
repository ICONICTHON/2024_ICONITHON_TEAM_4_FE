// company_inform_style.js
import styled from "styled-components";

export const Container = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;

  font-family: "SCDream4";
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
`;

export const CompanyInfo = styled.div`
  font-family: SCDream4;
  padding-top: 60px;
  font-size: 14px;
  text-align: center;
  width: 80vw;

  h2 {
    font-family: SCDream5;

    font-size: 20px;
  }
`;

export const QueueInfoContainer = styled.div`
  font-family: SCDream3;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  width: 80vw;
`;

export const QueueInfoBox = styled.div`
  font-family: SCDream3;
  flex: 1;
  border: 1px solid #f2a900;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
`;

export const JobDescription = styled.div`
  width: 80vw;
  background-color: #e0e0e0;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
`;

export const Text = styled.div`
  margin: 12px;
`;

export const AvailableCompaniesSection = styled.div`
  text-align: center;
`;

export const AvailableCompaniesTitle = styled.div`
  font-size: 16px;
  font-family: SCDream4;
`;

export const AvailableCompanies = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: space-between;
  width: 60vw;
`;

export const AvailableCompany = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ccc;
`;

export const WaitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const WaitButton = styled.button`
  width: 80vw;
  height: 32px;
  font-family: SCDream3;
  background-color: #f2a900;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 2px 2px 2px #00000040;
  &:hover,
  &:active {
    opacity: 0.8;
    transform: scale(0.98);
    transition: transform 0.2s ease;
  }
`;
