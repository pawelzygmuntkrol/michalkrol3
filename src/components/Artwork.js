// ARTWORK COMPONENT, SHOWS DETAILED DATA ABOUT CERTAIN PAINTING (CLICKED ON THE HOMEPAGE)

import React, { useContext } from "react";
import MetaTags from "react-meta-tags";
import { LanguageContext } from "./../language-context";
import * as variables from "./helper/Variables";
import styled, { css } from "styled-components";
import { PageTitle } from "./helper/PageTitle";
import { Scroll } from "./helper/Scroll";
import { pl } from "./../data/pl";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const margin = css`
  margin: 0.25rem 0;
`;

const ImageContainer = styled.div`
  ${variables.Flex};
  ${variables.DimensionsView};
  padding: 0 2rem;
  background-color: ${variables.BLACK};
`;

const Image = styled(LazyLoadImage)`
  max-height: 80%;
  width: auto;
  opacity: 0;
  animation: ${variables.ChangeOpacity} 0.5s 0.1s linear forwards;
`;

const ArtworkDataContainer = styled.div`
  ${variables.Flex};
  ${variables.DimensionsView};
`;

const ArtworkData = styled.div`
  ${variables.Flex};
  flex-direction: column;
  width: 80%;
  height: 100vh;
  z-index: 1;
`;

const ArtworkTitle = styled.div`
  ${variables.Flex};
  ${margin};
  text-align: center;
  font-size: ${variables.HEADER_FONT};
  font-weight: bold;

  @media (max-width: 500px), (max-width: 900px) and (orientation: landscape) {
    font-size: ${variables.TITLE_FONT};
  }
`;

const ArtworkAvailability = styled.div`
  ${variables.Flex};
  font-size: ${variables.TITLE_FONT};
  ${margin};

  @media (max-width: 500px), (max-width: 900px) and (orientation: landscape) {
    font-size: ${variables.REGULAR_FONT};
  }
`;

const ArtworkDescription = styled.div`
  ${variables.Flex};
  ${margin};

  @media (max-width: 500px), (max-width: 900px) and (orientation: landscape) {
    font-size: ${variables.MOBILE_FONT};
  }
`;

const ArtworkTitleAndCycle = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 2rem;
  color: ${variables.WHITE};
  opacity: 0;
  animation: ${variables.ChangeOpacity} 0.5s 2s linear forwards;

  @media (max-width: 500px), (max-width: 900px) and (orientation: landscape) {
    font-size: ${variables.MOBILE_FONT};
  }
`;

const ArtworkDimensions = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 2rem;
  color: ${variables.WHITE};
  opacity: 0;
  animation: ${variables.ChangeOpacity} 0.5s 2s linear forwards;

  @media (max-width: 500px), (max-width: 900px) and (orientation: landscape) {
    font-size: ${variables.MOBILE_FONT};
  }
`;

export const Artwork = () => {
  const artworkId = window.location.href.slice(-4); //Takes ID from dynamically created URL to show correct data about painting

  const redirectAndReload = () => {
    // eslint-disable-next-line
    window.location.replace(`http://www.michalkrol.eu/#/404`),
      window.location.reload();
  };

  pl.artworks[artworkId] === undefined && redirectAndReload(); //Checks if artwork exist - if not, shows 404 page

  const usedLanguage = useContext(LanguageContext);

  const {
    artworkTitle,
    artworkCreationDate,
    artworkCycle,
    artworkDimensionWidth,
    artworkDimensionHeight,
    artworkImages,
  } = pl.artworks[window.location.href.slice(-4)]; //pl because this data is the same no matter the language

  const { artworkAvailability, artworkDescription } =
    usedLanguage.language.artworks[window.location.href.slice(-4)]; //usedLanguage.language because this data is unique depending on language

  Scroll();

  return (
    <main>
      <MetaTags>
        <title>{artworkTitle} | Structuralist</title>
        <meta name="description" content={artworkDescription} />
        <meta
          name="keywords"
          content={
            ("Structuralist", "Michał Król", { artworkTitle }, { artworkCycle })
          }
        />
      </MetaTags>
      <PageTitle
        text={artworkTitle}
        backgroundColor={"black"} //Styled Components props
        color={"white"} //Styled Components props
      />
      {Object.keys(artworkImages).map((artwork) => {
        return (
          <ImageContainer key={`${artworkId} / ${artwork}`}>
            <Image
              src={`./../images/artworks/${artworkId}/${artwork}.jpg`}
              alt={`${artworkTitle}, ${artworkCycle}, Michał Król - Structuralist`}
            />
          </ImageContainer>
        );
      })}
      <ArtworkDataContainer>
        <ArtworkData>
          <ArtworkTitle>{artworkTitle}</ArtworkTitle>
          <ArtworkAvailability>
            {artworkCreationDate} / {artworkAvailability}
          </ArtworkAvailability>
          <ArtworkDescription>{artworkDescription}</ArtworkDescription>
        </ArtworkData>
        <ArtworkTitleAndCycle>
          <p>{artworkTitle}</p>
          <p>{artworkCycle}</p>
        </ArtworkTitleAndCycle>
        <ArtworkDimensions>
          <p>{artworkDimensionWidth}</p>
          <p>{artworkDimensionHeight}</p>
        </ArtworkDimensions>
      </ArtworkDataContainer>
    </main>
  );
};
