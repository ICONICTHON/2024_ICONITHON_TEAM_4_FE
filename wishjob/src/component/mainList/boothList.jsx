import React, { useEffect, useState } from "react";
import * as S from "./boothListStyle";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

export default function BoothList({ floorOption, dayOption }) {
  const nav = useNavigate();
  const [selectedFloor, setSelectedFloor] = useState("2");
  const [selectedDay, setSelectedDay] = useState("1"); // 기본값 설정
  const [booths, setData] = useState([]); // 빈 배열로 초기화

  useEffect(() => {
    if (floorOption === "2층") {
      setSelectedFloor("2");
    } else {
      setSelectedFloor("3");
    }
    if (dayOption === "1일차") {
      setSelectedDay("1");
    } else if (dayOption === "2일차") {
      setSelectedDay("2");
    } else if (dayOption === "3일차") {
      setSelectedDay("3");
    }
  }, [floorOption, dayOption]);

  useEffect(() => {
    fetchData();
  }, [selectedFloor, selectedDay]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `jobfair/boothList/${selectedDay}/${selectedFloor}/`
      );
      setData(response.data.booths); // 배열 형태일 경우에만 설정
      console.log(response.data.booths);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Wrapper>
      {booths.map((booth, index) => (
        <S.Item key={index} onClick={() => nav("/company_info")}>
          <S.BoothNum>{booth.boothNum}</S.BoothNum>
          <S.BoothCate>{booth.boothCate}</S.BoothCate>
          <S.BoothName>{booth.boothName}</S.BoothName>
        </S.Item>
      ))}
    </S.Wrapper>
  );
}
