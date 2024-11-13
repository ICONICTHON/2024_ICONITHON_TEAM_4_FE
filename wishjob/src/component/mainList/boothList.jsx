import React, { useEffect, useState } from "react";
import * as S from "./boothListStyle";
import { useNavigate } from "react-router-dom";

const boothes = [
  { number: "A01", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 3 },
  { number: "A02", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 3 },
  { number: "A03", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 3 },
  { number: "A04", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 3 },
  { number: "A05", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 3 },
  { number: "A06", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 3 },
  { number: "A07", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 3 },
  { number: "A08", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 3 },
  { number: "A09", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 3 },
  { number: "A10", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 2 },
  { number: "A11", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 2 },
  { number: "A12", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 2 },
  { number: "A13", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 2 },
  { number: "A14", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 2 },
  { number: "A15", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 2 },
  { number: "A16", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 2 },
  { number: "A17", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 2 },
  { number: "A18", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 2 },
  { number: "A19", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 2 },
  { number: "A20", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 2 },
  { number: "A21", cate: "채용상담관", name: "한국항공우주산업KAI", floor: 2 },
];

export default function BoothList({ floorOption }) {
  const nav = useNavigate();
  const [selectedFloor, setSelectedFloor] = useState(2);
  const filterBoothes = boothes.filter(
    (booth) => booth.floor === selectedFloor
  );

  useEffect(() => {
    if (floorOption === "2층") {
      setSelectedFloor(2);
    } else {
      setSelectedFloor(3);
    }
  }, [floorOption]);

  return (
    <S.Wrapper>
      {filterBoothes.map((booth, index) => (
        <S.Item key={index} onClick={() => nav("/company_info")}>
          <S.BoothNum>{booth.number}</S.BoothNum>
          <S.BoothCate>{booth.cate}</S.BoothCate>
          <S.BoothName>{booth.name}</S.BoothName>
        </S.Item>
      ))}
    </S.Wrapper>
  );
}
