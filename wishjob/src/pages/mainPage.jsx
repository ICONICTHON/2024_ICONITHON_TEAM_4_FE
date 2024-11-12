import React, { useEffect, useState } from "react";
import Header from "../component/header/header";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Text = styled.div`
  font-family: "SCDream4";
`;
const Content = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

export default function Main() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div>
      <Header />
      <Content visible={isVisible}>
        <Text>우선 아무 내용이나 넣습니다.</Text>
      </Content>
    </div>
  );
}
