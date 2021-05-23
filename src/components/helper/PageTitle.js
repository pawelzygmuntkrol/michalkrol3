import React from "react";
import * as variables from "./Variables";
import styled from "styled-components";

const Header = styled.h1`
  ${variables.Flex};
  ${variables.DimensionsView};
  text-align: center;
  font-size: ${variables.HEADER_FONT};
  animation: ${variables.ChangeColor} 1.25s linear;

  @media (max-width: 500px), (max-width: 849px) and (orientation: landscape) {
    font-size: ${variables.MOBILE_HEADER_FONT};
  }
`;

export const PageTitle = ({ text, backgroundColor, color }) => {
  return (
    <Header style={{ backgroundColor: backgroundColor, color: color }}>
      {text}
    </Header>
  );
};
