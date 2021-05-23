// SINGLE HOMEITEM COMPONENT, USED IN Home.js

import React, { useContext } from "react";
import { LanguageContext } from "./../language-context";
import * as variables from "./helper/Variables";
import styled from "styled-components";
import { pl } from "./../data/pl";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Painting = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  width: 21vw;
  height: auto;
  padding: 0;
  text-decoration: none;
  color: ${variables.DARK};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    width: 85vw;
  }
`;

const Image = styled.div`
  z-index: 1;
  transition: 0.3s;
  overflow-y: hidden;

  &:hover {
    filter: brightness(0.1) blur(3px);
    z-index: 0;
  }
`;

const Title = styled.p`
  text-decoration: none;
  font-weight: bold;
`;

const Cycle = styled.p`
  font-family: "Open Sans Condensed", sans-serif;
`;

const Availability = styled.p`
  position: relative;
  bottom: 8rem;
  ${variables.Flex};
  width: 100%;
  height: auto;
  color: ${variables.WHITE};
  font-size: ${variables.TITLE_FONT};
  pointer-events: none;
`;

export const HomeItem = ({ artworkId }) => {
  const usedLanguage = useContext(LanguageContext);

  const { artworkTitle, artworkCycle } = pl.artworks[artworkId];

  const { artworkAvailability } = usedLanguage.language.artworks[artworkId];

  return (
    <Painting>
      <Image>
        <LazyLoadImage //React Lazy Load Image Component package tag, needed to be styled inline
          effect="blur"
          src={`./images/artworks/${artworkId}/${artworkId}-1.jpg`}
          alt={`${artworkTitle}, ${artworkCycle}, Michał Król - Structuralist`}
          position={"relative"}
          width={"99%"}
          height={"98%"}
        />
      </Image>
      <Title>{artworkTitle}</Title>
      <Cycle>{artworkCycle}</Cycle>
      <Availability>{artworkAvailability}</Availability>
    </Painting>
  );
};
