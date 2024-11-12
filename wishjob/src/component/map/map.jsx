import React, { useEffect, useState } from "react";
import * as S from "./mapStyle";
import Map_2f from "../../asset/image/2f_map.png";
import Map_3f from "../../asset/image/3f_map.png";

export default function Map(props) {
  const [mapImg, setMapImg] = useState(Map_2f);

  useEffect(() => {
    // floorOption이 변경될 때마다 mapImg를 업데이트
    if (props.floorOption === "2층") {
      setMapImg(Map_2f);
    } else if (props.floorOption === "3층") {
      setMapImg(Map_3f);
    }
  }, [props.floorOption]);

  return (
    <S.Wrapper>
      <S.MapImg src={mapImg} alt="중도 도안" />
    </S.Wrapper>
  );
}
