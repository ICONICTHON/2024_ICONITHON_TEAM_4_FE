import React, { useEffect, useState } from "react";
import Header from "../component/header/header";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Map from "../component/map/map";
import DaySelection from "../component/map/daySelction";
import FloorSelection from "../component/map/floorSelection";

const dayList = [{ name: "1일차" }, { name: "2일차" }, { name: "3일차" }];
const floorList = [{ name: "2층" }, { name: "3층" }];

const Text = styled.div`
  font-family: "SCDream4";
`;
const Content = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 92vw;
  flex-direction: column;
  padding: 4vw;
  padding-top: calc(60px + 4vw);
  gap: 4vw;
`;

const Select = styled.div`
  width: 88vw;
  display: flex;
  gap: 20px;
`;

export default function Main() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const [floorOption, setFloorOption] = useState(floorList[0].name);

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div>
      <Header />
      <Content visible={isVisible}>
        <Map floorOption={floorOption} />
        <Select>
          <DaySelection list={dayList} />
          <FloorSelection
            list={floorList}
            floorOption={floorOption}
            setFloorOption={setFloorOption}
          />
        </Select>
      </Content>
    </div>
  );
}
