// company_inform.jsx
import React from "react";
import { IoMenu } from "react-icons/io5";
import { TbUserSquareRounded } from "react-icons/tb";
import Header from "../component/header/header";
import * as S from "./company_inform_style";
import { useLocation } from "react-router-dom";

const CompanyInfo = () => {
  const location = useLocation();

    
  return (
    <>
      <Header />

      <S.Container>
        <S.CompanyImageSection>
          <S.LargeCompanyImage>기업 사진</S.LargeCompanyImage>
          <S.SmallCompanyImage />
          <S.SmallCompanyImage />
        </S.CompanyImageSection>

        <S.CompanyInfo>
          <h2>기업 이름</h2>
          <p>
            이건 기업 정보 : 기업에 대한 설명, 근무조건? 같은 것도 있으면 좋을듯??
            <br />
            다들 화이팅 다들 화이팅 다들 화이팅 다들 화이팅 다들 화이팅 지금은 새벽
            4시 지금은 새벽 4시 아무말이나 하고 있음 밤 티라미수 먹고 싶음
          </p>
        </S.CompanyInfo>

        <S.QueueInfoContainer>
          <S.QueueInfoBox>
            <span>현재 대기 인원</span>
            <div>4명</div>
          </S.QueueInfoBox>
          <S.QueueInfoBox>
            <span>예상 대기 시간</span>
            <div>30분</div>
          </S.QueueInfoBox>
        </S.QueueInfoContainer>

        <S.JobDescription>
          입사 공고나 부스에서 뭘 하고 있는지 넣으면 좋을거 같음.
        </S.JobDescription>

        <S.AvailableCompaniesSection>
          <S.AvailableCompaniesTitle>현재 바로 체험 가능한 기업</S.AvailableCompaniesTitle>
          <S.AvailableCompanies>
            <S.AvailableCompany />
            <S.AvailableCompany />
            <S.AvailableCompany />
          </S.AvailableCompanies>
        </S.AvailableCompaniesSection>

        <S.WaitButtonContainer>
          <S.WaitButton>대기하기</S.WaitButton>
        </S.WaitButtonContainer>
      </S.Container>
    </>
  );
};

export default CompanyInfo;
