import React from "react";
import * as S from "./daySelectionStyle";

export default function FloorSelection(props) {
  return (
    <S.Wrapper>
      {props.list.map((item, index) => (
        <S.DayButton
          key={index}
          isSelected={props.floorOption === item.name}
          onClick={() => props.setFloorOption(item.name)}
        >
          {item.name}
        </S.DayButton>
      ))}
    </S.Wrapper>
  );
}
