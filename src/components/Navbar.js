// NAVBAR COMPONENT, SHOWN AT THE TOP OF EVERY SUBPAGE

import React, { useState, useContext } from "react";
import { LanguageContext } from "./../language-context";
import * as variables from "./helper/Variables";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { Button } from "./helper/Button";

const Nav = styled.nav`
  position: fixed;
  ${variables.FlexJustifyBetween};
  width: 100vw;
  height: 5rem;
  padding: 0 1.5rem 0 2rem;
  z-index: 3;
`;

const AuthorWrapper = styled.div`
  ${variables.FlexAlignStart};
  flex-direction: column;
  width: 25vw;
  color: ${variables.DARK};
`;

const AuthorName = styled.p`
  font-size: 1.25rem;
  font-weight: 800;
`;

const AuthorPseudonym = styled.p`
  font-family: "Open Sans Condensed", sans-serif;
`;

const MenuButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 25vw;
`;

export const Navbar = () => {
  const usedLanguage = useContext(LanguageContext);

  const { menuButton, closeMenuButton } = usedLanguage.language.menu;

  const [menuButtonName, setMenuButtonName] = useState(menuButton);
  const [color, setColor] = useState(variables.DARK);
  const [noHover, setNoHover] = useState(true);
  const [width, setWidth] = useState("0vw");

  const changeMenuButton = () => {
    menuButtonName === menuButton
      ? setMenuButtonName(closeMenuButton)
      : setMenuButtonName(menuButton);
    color === `${variables.DARK}`
      ? setColor(`${variables.DIMGRAY}`)
      : setColor(`${variables.DARK}`);
    noHover === true ? setNoHover(false) : setNoHover(true);
    width === "0vw" ? setWidth("100vw") : setWidth("0vw"); //Used to show Sidebar by changing its width
  };

  return (
    <>
      <Nav>
        <AuthorWrapper>
          <AuthorName>Michał Król</AuthorName>
          <AuthorPseudonym>Structuralist</AuthorPseudonym>
        </AuthorWrapper>
        <MenuButtonWrapper>
          <Button
            text={menuButtonName}
            clickHandler={changeMenuButton}
            color={color} //Styled Componetns props
            noHover={noHover} //Styled Componetns props
          />
        </MenuButtonWrapper>
      </Nav>
      <Sidebar
        changeMenuButton={changeMenuButton}
        width={width} //Styled Componetns props
      />
    </>
  );
};
