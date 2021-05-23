import React from "react";
import * as variables from "./Variables";
import styled from "styled-components";

const Button = styled.a`
  position: ${(props) => (props.cookie ? "relative" : "absolute")};
  top: ${(props) => (props.cookie ? "auto" : "75%")};
  left: ${(props) => (props.cookie ? "auto" : "50%")};
  transform: ${(props) => (props.cookie ? "none" : "translate(-50%, -50%)")};
  ${variables.Flex};
  width: 10rem;
  height: 3rem;
  text-decoration: none;
  background-color: ${variables.BLACK};
  color: ${variables.DIMGRAY};
  opacity: 0;
  transition: 0.3s;
  animation: ${variables.ChangeOpacity} 1s 0.5s linear forwards;

  &:hover {
    color: ${variables.WHITE};
    cursor: pointer;
  }
`;

export const BigButton = ({ text, href, cookie, clickHandler }) => {
  return (
    <Button href={href} cookie={cookie} onClick={clickHandler}>
      {text}
    </Button>
  );
};
