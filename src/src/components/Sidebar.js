// SIDEBAR COMPONENT, SHOWN AT THE TOP OF EVERY SUBPAGE

import React, { useContext } from "react";
import { LanguageContext } from "./../language-context";
import { CycleContext } from "./../cycle-context";
import { Route, Link } from "react-router-dom";
import * as variables from "./helper/Variables";
import styled from "styled-components";
import { Button } from "./helper/Button";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillBehanceSquare } from "react-icons/ai";
import { pl } from "./../data/pl";
import { en } from "./../data/en";
import { de } from "./../data/de";

const Sidenav = styled.aside`
  position: fixed;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  max-width: 25rem;
  padding-top: 5rem;
  background-color: ${variables.OPAQUE_BLACK};
  z-index: 2;

  @media (max-width: 500px) {
    max-width: 100vw;
  }
`;

const BackButton = styled.p`
  position: fixed;
  top: 4rem;
  right: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
  color: ${variables.DARK};
  z-index: 2;

  @media (max-width: 500px), (max-width: 850px) and (orientation: landscape) {
    right: 1.5rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const SocialButtons = styled.ul`
  position: absolute;
  bottom: 5rem;
  ${variables.FlexJustifyBetween};
  width: 100%;
  padding: 0 35%;
  color: ${variables.DIMGRAY};

  @media (max-width: 850px) and (orientation: landscape) {
    right: 1rem;
    bottom: 1rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
    height: 7.5rem;
    width: auto;
    padding: 0.5rem;
  }
`;

const LanguageButtonsWrapper = styled.ul`
  ${variables.FlexJustifyBetween};
  width: 100%;
  padding: 0 35%;
  list-style-type: none;
  color: ${variables.DIMGRAY};
`;

const SocialButtonIcon = styled.a`
  color: ${variables.DIMGRAY};
  transition: 0.3s;

  :hover {
    color: ${variables.WHITE};
  }
`;

export const Sidebar = ({ hideSidebar, changeMenuButton, width }) => {
  const usedLanguage = useContext(LanguageContext);
  const usedCycle = useContext(CycleContext);

  const {
    backToMainPage,
    artworksMenuButton,
    exhibitionsMenuButton,
    biographyMenuButton,
    contactMenuButton,
  } = usedLanguage.language.menu;

  return (
    <>
      <Route exact path="/artworks/:slug">
        {" "}
        {/* DISPLAYED ONLY IN ARTWORK COMPONENT */}
        <Link to={"/"}>
          <BackButton>{backToMainPage}</BackButton>
        </Link>
      </Route>
      <Sidenav style={{ width: width }}>
        <Link to="/">
          {window.location.href === "http://www.michalkrol.eu/#/" ? (
            <div>
              <Button
                text={"Structural Collage"}
                clickHandler={
                  (hideSidebar,
                  changeMenuButton,
                  usedCycle.cycle === "Structural Collage"
                    ? ""
                    : usedCycle.changeCycle)
                }
                color={
                  usedCycle.cycle === "Structural Collage"
                    ? variables.WHITE
                    : variables.DIMGRAY
                }
              />
              <Button
                text={"Interior"}
                clickHandler={
                  (hideSidebar,
                  changeMenuButton,
                  usedCycle.cycle === "Interior" ? "" : usedCycle.changeCycle)
                }
                color={
                  usedCycle.cycle === "Interior"
                    ? variables.WHITE
                    : variables.DIMGRAY
                }
              />
            </div>
          ) : (
            <Button
              text={artworksMenuButton}
              clickHandler={(hideSidebar, changeMenuButton)}
              color={variables.DIMGRAY}
            />
          )}
        </Link>
        <Link to="/exhibitions">
          <Button
            text={exhibitionsMenuButton}
            clickHandler={(hideSidebar, changeMenuButton)}
            color={
              window.location.href.includes("exhibitions") === true
                ? variables.WHITE
                : variables.DIMGRAY
            }
          />
        </Link>
        <Link to="/biography">
          <Button
            text={biographyMenuButton}
            clickHandler={(hideSidebar, changeMenuButton)}
            color={
              window.location.href.includes("biography") === true
                ? variables.WHITE
                : variables.DIMGRAY
            }
          />
        </Link>
        <Link to="/contact">
          <Button
            text={contactMenuButton}
            clickHandler={(hideSidebar, changeMenuButton)}
            color={
              window.location.href.includes("contact") === true
                ? variables.WHITE
                : variables.DIMGRAY
            }
          />
        </Link>
        <LanguageButtonsWrapper>
          <Button
            text="pl"
            clickHandler={usedLanguage.changeToPl}
            color={
              usedLanguage.language === pl ? variables.WHITE : variables.DIMGRAY
            }
          />
          <Button
            text="en"
            clickHandler={usedLanguage.changeToEn}
            color={
              usedLanguage.language === en ? variables.WHITE : variables.DIMGRAY
            }
          />
          <Button
            text="de"
            clickHandler={usedLanguage.changeToDe}
            color={
              usedLanguage.language === de ? variables.WHITE : variables.DIMGRAY
            }
          />
        </LanguageButtonsWrapper>
        <SocialButtons>
          <SocialButtonIcon href="https://www.facebook.com/StructuralistArt/">
            <AiFillFacebook />
          </SocialButtonIcon>
          <SocialButtonIcon href="https://www.instagram.com/structuralist_art/">
            <AiFillInstagram />
          </SocialButtonIcon>
          <SocialButtonIcon href="https://www.behance.net/michalkrol263a63?fbclid=IwAR1LWaRyvVuh9UuM3MHByTYgqDOKG8Qo7h6mQq7tTM3ezJXU-HQ4Wtq09i8">
            <AiFillBehanceSquare />
          </SocialButtonIcon>
        </SocialButtons>
      </Sidenav>
    </>
  );
};
