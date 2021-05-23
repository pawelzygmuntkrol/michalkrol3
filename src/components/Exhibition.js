// SINGLE EXHIBITION COMPONENT, USED IN ExhibitionList.js

import React, { useContext } from "react";
import { LanguageContext } from "./../language-context";
import * as variables from "./helper/Variables";
import styled from "styled-components";
import { css } from "styled-components";
import { pl } from "./../data/pl";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const marginBottom = css`
  margin-bottom: 1rem;
`;

const ExhbitionItem = styled.article`
  ${variables.Flex};
  ${variables.DimensionsView};
  padding: 0 2rem;
  text-align: justify;
`;

const ExhibitionData = styled.div`
  width: 80%;

  @media (max-width: 500px), (max-width: 900px) and (orientation: landscape) {
    width: 100%;
  }
`;

const ExhibitionPoster = styled(LazyLoadImage)`
  width: 20%;
  height: auto;
  margin-left: 2rem;
  opacity: 0;
  animation: ${variables.ChangeOpacity} 0.5s 0.1s linear forwards;

  @media (max-width: 500px), (max-width: 900px) and (orientation: landscape) {
    display: none;
  }
`;

const ExhibitionTitle = styled.h2`
  ${marginBottom}
  font-size: ${variables.TITLE_FONT};

  @media (max-width: 500px), (max-width: 900px) and (orientation: landscape) {
    font-size: ${variables.REGULAR_FONT};
  }
`;

const ExhibitionDate = styled.h3`
  ${marginBottom}

  @media (max-width: 500px), (max-width: 900px) and (orientation: landscape) {
    font-size: ${variables.MOBILE_FONT};
  }
`;

const ExhibitionDescription = styled.p`
  ${marginBottom}

  @media (max-width: 500px), (max-width: 900px) and (orientation: landscape) {
    font-size: ${variables.MOBILE_FONT};
  }
`;

const ExhibitionLink = styled.a`
  color: ${variables.DARK};
  font-size: ${variables.MOBILE_FONT};
  display: block;
  text-decoration: none;

  &:hover {
    font-weight: 900;
  }

  &:visited {
    color: ${variables.DARK};
  }

  @media (max-width: 500px), (max-width: 900px) and (orientation: landscape) {
    font-size: ${variables.SMALL_MOBILE_FONT};
  }
`;

export const Exhibition = ({ exhibitionId }) => {
  const usedLanguage = useContext(LanguageContext);

  const { exhibitionTitle, exhibitionDate, exhibitionDescription } =
    usedLanguage.language.exhibitions.exhibitionsContainer[exhibitionId];

  const { exhibitionLink1, exhibitionLink2, exhibitionLink3, exhibitionImage } =
    pl.exhibitions.exhibitionsContainer[exhibitionId]; //pl because this data is the same no matter the language

  return (
    <ExhbitionItem>
      <ExhibitionData>
        <ExhibitionTitle>{exhibitionTitle}</ExhibitionTitle>
        <ExhibitionDate>{exhibitionDate}</ExhibitionDate>
        <ExhibitionDescription>{exhibitionDescription}</ExhibitionDescription>
        <ExhibitionLink href={exhibitionLink1}>
          {exhibitionLink1}
        </ExhibitionLink>
        <ExhibitionLink href={exhibitionLink2}>
          {exhibitionLink2}
        </ExhibitionLink>
        <ExhibitionLink href={exhibitionLink3}>
          {exhibitionLink3}
        </ExhibitionLink>
      </ExhibitionData>
      <ExhibitionPoster
        src={exhibitionImage}
        alt={`${exhibitionTitle} - Michał Król - Structuralist`}
      />
    </ExhbitionItem>
  );
};
