// COOKIE BANNER COMPONENT, SHOWN ON EVERY SUBPAGE UNTIL CLICKED

import React, { useState, useContext } from "react";
import { LanguageContext } from "./../language-context";
import * as variables from "./helper/Variables";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: fixed;
  ${variables.Flex};
  ${variables.DimensionsView};
  background-color: ${variables.OPAQUE_BLACK};
  z-index: 4;
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const PopUp = () => {
  const usedLanguage = useContext(LanguageContext);

  const { artworks } = usedLanguage.language;

  const [isVisible, setIsVisible] = useState(
    sessionStorage.getItem("popUpStatus") === "false" ? false : true
  );

  const hidePopUp = () => {
    sessionStorage.setItem("popUpStatus", false);
    setIsVisible(false);
  };

  const popUpImageId = Object.keys(artworks)[0]; //Gets last painting to show it on pop-up banner

  return (
    <ImageWrapper
      onClick={hidePopUp}
      style={{ display: isVisible ? "" : "none" }}
    >
      <Image
        src={`./images/artworks/${popUpImageId}/${popUpImageId}-1.jpg`}
        alt={`Latest painting, Michał Król - Structuralist`}
      />
    </ImageWrapper>
  );
};
