// LIST OF SINGLE EXHIBITION COMPONENTS

import React, { useContext } from "react";
import MetaTags from "react-meta-tags";
import { LanguageContext } from "./../language-context";
import * as variables from "./helper/Variables";
import styled from "styled-components";
import { PageTitle } from "./helper/PageTitle";
import { Exhibition } from "./Exhibition";
import { Scroll } from "./helper/Scroll";

const ExhibitionsContainer = styled.section`
  opacity: 0;
  animation: ${variables.ChangeOpacity} 0.5s 1.5s linear forwards;
`;

export const ExhibitionList = () => {
  const usedLanguage = useContext(LanguageContext);

  const { exhibitionsHeader, exhibitionsContainer } =
    usedLanguage.language.exhibitions;

  Scroll();

  return (
    <main>
      <MetaTags>
        <title>{exhibitionsHeader} | Structuralist</title>
        <meta name="description" content={exhibitionsHeader} />
        <meta
          name="keywords"
          content={("Structuralist", "Michał Król", { exhibitionsHeader })}
        />
      </MetaTags>
      <PageTitle text={exhibitionsHeader} />
      <ExhibitionsContainer>
        {Object.keys(exhibitionsContainer).map((exhibitionId) => {
          return <Exhibition exhibitionId={exhibitionId} key={exhibitionId} />;
        })}
      </ExhibitionsContainer>
    </main>
  );
};
