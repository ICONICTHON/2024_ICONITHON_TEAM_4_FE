import React from "react";
import { IoMenu } from "react-icons/io5";
import { TbUserSquareRounded } from "react-icons/tb";
import * as S from "./headerStyle";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const nav = useNavigate();
  return (
    <S.Wrapper>
      <S.MenuIcon onClick={() => nav("/mypage")}>
        <IoMenu size={28} />
      </S.MenuIcon>
      <S.Text onClick={() => nav("/main")}>나 JOB알아봐라</S.Text>
      <S.UserIcon>
        <TbUserSquareRounded size={28} />
      </S.UserIcon>
    </S.Wrapper>
  );
}
