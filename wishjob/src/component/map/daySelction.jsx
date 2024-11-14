import React from "react";
import * as S from "./daySelectionStyle";

export default function DaySelection(props) {
  return (
    <S.Wrapper>
      {props.list.map((item, index) => (
        <S.DayButton
          key={index}
          isSelected={props.dayOption === item.name}
          onClick={() => props.setDayOption(item.name)}
        >
          {item.name}
        </S.DayButton>
      ))}
    </S.Wrapper>
  );
}
