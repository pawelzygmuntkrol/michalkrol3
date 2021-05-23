// CONTACT SUBPAGE COMPONENT

import React, { useState, useContext } from "react";
import MetaTags from "react-meta-tags";
import { LanguageContext } from "./../language-context";
import { PageTitle } from "./helper/PageTitle";
import { BigButton } from "./helper/BigButton";

export const Contact = () => {
  const usedLanguage = useContext(LanguageContext);

  const { contactHeader, contactButton } = usedLanguage.language.contact;

  const [buttonText, setButtonText] = useState(contactButton);

  const changeText = () => {
    setButtonText("kontakt@michalkrol.eu");
  };

  return (
    <main>
      <MetaTags>
        <title>{contactHeader} | Structuralist</title>
        <meta name="description" content={contactHeader} />
        <meta
          name="keywords"
          content={("Structuralist", "Michał Król", { contactHeader })}
        />
      </MetaTags>
      <PageTitle text={contactHeader} />
      <BigButton
        text={buttonText}
        href="mailto:kontakt@michalkrol.eu"
        clickHandler={changeText}
      />
    </main>
  );
};
