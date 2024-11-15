import React, { useEffect, useState } from "react";
import * as S from "./boothListStyle";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { FaStar } from "react-icons/fa";

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

  const [boothCate, setBC] = useState("기술연구");

  const getRecommend = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("userId"); // 로컬 스토리지에서 토큰 가져오기
      const response = await axios.post(
        `jobfair/recommend/`,
        {}, // POST 요청의 body가 필요 없으면 빈 객체 전달
        {
          headers: {
            Authorization: `Bearer ${token}`, // JWT 토큰 추가
          },
        }
      );
      console.log(token);
      setBC(response.data.recommended_category);
      console.log(response.data.recommended_category);
    } catch (e) {
      if (e.response) {
        console.error("Error Response Data:", e.response.data); // 서버에서 반환된 에러 메시지
        console.error("Error Status:", e.response.status); // HTTP 상태 코드
        console.error("Error Headers:", e.response.headers); // 응답 헤더
      } else {
        console.error("Error Message:", e.message); // 기타 에러 메시지
      }
    }
  };
  return (
    <S.Container>
      <form onSubmit={getRecommend}>
        <S.PostBtn type="submit" value="추천 부스 보기" />
      </form>
      <S.Wrapper>
        {booths.map((booth, index) => (
          <S.Item key={index} onClick={() => nav("/company_info")}>
            {boothCate === booth.boothCate ? (
              <>
                <S.Star>
                  <FaStar size={24} />
                </S.Star>
                <S.BoothNum>{booth.boothNum}</S.BoothNum>
                <S.BoothCate>{booth.boothCate}</S.BoothCate>
                <S.BoothName>{booth.boothName}</S.BoothName>
              </>
            ) : (
              <>
                <S.BoothNum>{booth.boothNum}</S.BoothNum>
                <S.BoothCate>{booth.boothCate}</S.BoothCate>
                <S.BoothName>{booth.boothName}</S.BoothName>
              </>
            )}
          </S.Item>
        ))}
      </S.Wrapper>
    </S.Container>
  );
}
