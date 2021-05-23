// COOKIE BANNER COMPONENT, SHOWN ON EVERY SUBPAGE UNTIL ACCEPTED

import React, { useState, useContext } from "react";
import { LanguageContext } from "./../language-context";
import * as variables from "./helper/Variables";
import styled from "styled-components";
import { BigButton } from "./helper/BigButton";

const CookieBannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  ${variables.FlexJustifyBetween};
  width: 100vw;
  height: 6rem;
  padding: 0 2rem;
  color: ${variables.WHITE};
  background-color: ${variables.OPAQUE_BLACK};
  z-index: 5;

  @media (max-width: 500px), (max-width: 900px) and (orientation: landscape) {
    font-size: ${variables.SMALL_MOBILE_FONT};
  }
`;

const CookieDataWrapper = styled.div`
  margin-right: 0.5rem;
`;

const CookieLink = styled.a`
  color: ${variables.WHITE};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const CookieBanner = () => {
  const usedLanguage = useContext(LanguageContext);

  const { cookieBannerParagraph, cookieBannerLink, cookieBannerButton } =
    usedLanguage.language.cookieBanner;

  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(
    localStorage.getItem("cookieBannerStatus") === "false" ? false : true
  );

  const hideCookieBanner = () => {
    localStorage.setItem("cookieBannerStatus", false);
    setIsCookieBannerVisible(false);
  };

  return (
    <>
      {isCookieBannerVisible ? (
        <CookieBannerWrapper>
          <CookieDataWrapper>
            <p>{cookieBannerParagraph}</p>
            <CookieLink href="https://www.websitepolicies.com/policies/view/bPL8tCFx">
              {cookieBannerLink}
            </CookieLink>
          </CookieDataWrapper>
          <BigButton
            text={cookieBannerButton}
            clickHandler={hideCookieBanner}
            cookie //Styled Components props, changes button position etc.
          />
        </CookieBannerWrapper>
      ) : null}
    </>
  );
};
