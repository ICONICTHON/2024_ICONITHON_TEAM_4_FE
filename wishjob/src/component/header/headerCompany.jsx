import React from "react";
import * as S from "./headerStyle";
import { FaRegCheckSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function HeaderCompany() {
  const nav = useNavigate();
  return (
    <S.Wrapper>
      <S.SetSpace></S.SetSpace>
      <S.Text onClick={() => nav("/ForCompany")}>나 JOB알아봐라</S.Text>
      <S.UserIcon>
        <FaRegCheckSquare size={28} onClick={() => nav("/mypage")} />
      </S.UserIcon>
    </S.Wrapper>
  );
}
