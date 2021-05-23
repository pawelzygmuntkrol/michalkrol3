import React from "react";
import * as variables from "./Variables";
import styled from "styled-components";

const AppButton = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: transparent;
  font-size: ${variables.REGULAR_FONT};
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.noHover ? "none" : "white !important")};
  }

  &:focus {
    outline: none;
  }
`;

export const Button = ({ text, href, color, clickHandler, noHover }) => {
  return (
    <AppButton
      href={href}
      onClick={clickHandler}
      style={{ color: color }}
      noHover={noHover}
    >
      {text}
    </AppButton>
  );
};
