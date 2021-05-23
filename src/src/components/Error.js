// 404 ERROR COMPONENT

import React, { useContext } from "react";
import MetaTags from "react-meta-tags";
import { LanguageContext } from "./../language-context";
import { Link } from "react-router-dom";
import { PageTitle } from "./helper/PageTitle";
import { BigButton } from "./helper/BigButton";

export const Error = () => {
  const usedLanguage = useContext(LanguageContext);

  const { errorHeader, errorButton } = usedLanguage.language.error;

  return (
    <main>
      <MetaTags>
        <title>{errorHeader} | Structuralist</title>
        <meta name="description" content={errorHeader} />
        <meta
          name="keywords"
          content={("Structuralist", "Michał Król", { errorHeader })}
        />
      </MetaTags>
      <PageTitle text={errorHeader} />
      <Link to={"/"}>
        <BigButton text={errorButton} />
      </Link>
    </main>
  );
};
