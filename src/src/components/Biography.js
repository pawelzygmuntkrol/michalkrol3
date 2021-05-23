// BIOGRAPHY SUBPAGE COMPONENENT

import React, { useContext } from "react";
import MetaTags from "react-meta-tags";
import { LanguageContext } from "./../language-context";
import * as variables from "./helper/Variables";
import styled from "styled-components";
import { PageTitle } from "./helper/PageTitle";
import { Scroll } from "./helper/Scroll";

const BiographyParagraph = styled.p`
  ${variables.Flex};
  ${variables.DimensionsView};
  padding: 20%;
  text-align: justify;
  color: ${variables.WHITE};
  animation: ${variables.ChangeColor} 0.5s 1.5s linear forwards;

  @media (max-width: 500px), (max-width: 850px) and (orientation: landscape) {
    padding: 2rem;
    font-size: ${variables.MOBILE_FONT};
  }
`;

export const Biography = () => {
  const usedLanguage = useContext(LanguageContext);

  const { biographyHeader, biographyParagraph } =
    usedLanguage.language.biography;

  Scroll();

  return (
    <main>
      <MetaTags>
        <title>{biographyHeader} | Structuralist</title>
        <meta name="description" content={biographyParagraph} />
        <meta
          name="keywords"
          content={("Structuralist", "Michał Król", { biographyHeader })}
        />
      </MetaTags>
      <PageTitle text={biographyHeader} />
      <BiographyParagraph>{biographyParagraph}</BiographyParagraph>
    </main>
  );
};
