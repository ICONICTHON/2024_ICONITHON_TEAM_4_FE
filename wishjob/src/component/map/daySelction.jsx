import React, { useState } from "react";
import * as S from "./daySelectionStyle";

export default function DaySelection(props) {
  const [itemOption, setItemOption] = useState(props.list[0].name);

  return (
    <S.Wrapper>
      {props.list.map((item, index) => (
        <S.DayButton
          key={index}
          isSelected={itemOption === item.name}
          onClick={() => setItemOption(item.name)}
        >
          {item.name}
        </S.DayButton>
      ))}
    </S.Wrapper>
  );
}
