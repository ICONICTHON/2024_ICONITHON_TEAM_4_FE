// company_inform_style.js
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: "SCDream4";
  max-width: 600px;
  margin: 0 auto;
`;

export const CompanyImageSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const CompanyImage = styled.div`
  background-color: #ccc;
`;

export const LargeCompanyImage = styled(CompanyImage)`
  grid-row: span 2;
  width: 100%;
  height: 100%;
`;

export const SmallCompanyImage = styled(CompanyImage)`
  height: 100px;
`;

export const CompanyInfo = styled.div`
  margin-top: 20px;
  font-size: 16px;
  text-align: center;

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const QueueInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
`;

export const QueueInfoBox = styled.div`
  flex: 1;
  border: 1px solid #f2a900;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
`;

export const JobDescription = styled.div`
  margin-top: 15px;
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  height:100px;
`;

export const AvailableCompaniesSection = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const AvailableCompaniesTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const AvailableCompanies = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const AvailableCompany = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ccc;
  margin: 5px;
`;

export const WaitButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const WaitButton = styled.button`
  width: 90%;
  max-width: 400px;
  background-color: #f2a900;
  color: white;
  font-size: 16px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;
