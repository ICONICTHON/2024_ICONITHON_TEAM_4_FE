import React from "react";
import LogoPng from "../../asset/image/job-search.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 40vw;
`;
const Text = styled.div`
  font-family: Typo;
  font-size: 6vw;
`;

export default function Logo() {
  return (
    <div>
      <Container>
        <LogoImg src={LogoPng} alt="로고" />
        <Text>나 JOB 알아봐라</Text>
      </Container>
    </div>
  );
}