import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { LanguageContext } from "./language-context";
import { CycleContext } from "./cycle-context";
import { createGlobalStyle } from "styled-components";
import { CookieBanner } from "./components/CookieBanner";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Artwork } from "./components/Artwork";
import { ExhibitionList } from "./components/ExhibitionList";
import { Biography } from "./components/Biography";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { pl } from "./data/pl";
import { en } from "./data/en";
import { de } from "./data/de";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Oswald', sans-serif;
    overflow-x: hidden;
  }
`;

const App = () => {
  let detectedLanguage = "";

  if (localStorage.getItem("lang") === "pl") {
    detectedLanguage = pl;
  } else if (localStorage.getItem("lang") === "de") {
    detectedLanguage = de;
  } else if (localStorage.getItem("lang") === "en") {
    detectedLanguage = en;
  } else if (navigator.language.includes("pl")) {
    detectedLanguage = pl;
  } else if (navigator.language.includes("de")) {
    detectedLanguage = de;
  } else {
    detectedLanguage = en;
  }

  const [userLanguage, setUserLanguage] = useState(detectedLanguage);

  const changeToPl = () => {
    localStorage.setItem("lang", "pl");
    setUserLanguage(pl);
  };

  const changeToEn = () => {
    localStorage.setItem("lang", "en");
    setUserLanguage(en);
  };

  const changeToDe = () => {
    localStorage.setItem("lang", "de");
    setUserLanguage(de);
  };

  const usedLanguage = userLanguage;

  const interiorButton = "Interior →";
  const structuralCollageButton = "Structural Collage →";

  const [cycleButtonName, setCycleButtonName] = useState(
    sessionStorage.getItem("cycleButtonName") || interiorButton
  );
  const [cycle, setCycle] = useState(
    sessionStorage.getItem("cycle") || "Structural Collage"
  );

  const changeCycle = () => {
    // eslint-disable-next-line
    let displayedCycleButton =
      cycleButtonName === interiorButton
        ? (sessionStorage.setItem("cycleButtonName", structuralCollageButton),
          setCycleButtonName(structuralCollageButton))
        : (sessionStorage.setItem("cycleButtonName", interiorButton),
          setCycleButtonName(interiorButton));

    // eslint-disable-next-line
    let displayedCycle =
      cycle === "Structural Collage"
        ? (setCycle(sessionStorage.setItem("cycle", "Interior")),
          setCycle("Interior"),
          window.scrollTo(0, 0))
        : (setCycle(sessionStorage.setItem("cycle", "Structural Collage")),
          setCycle("Structural Collage"),
          window.scrollTo(0, 0));
  };

  return (
    <LanguageContext.Provider
      value={{
        language: usedLanguage,
        changeToPl: changeToPl,
        changeToEn: changeToEn,
        changeToDe: changeToDe,
      }}
    >
      <CycleContext.Provider
        value={{
          cycle: cycle,
          cycleButtonName: cycleButtonName,
          changeCycle: changeCycle,
        }}
      >
        <Router>
          <GlobalStyle />
          <CookieBanner />
          <Navbar />
          {/* <Sidebar /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artworks/:slug" component={Artwork} />
            <Route exact path="/exhibitions" component={ExhibitionList} />
            <Route exact path="/biography" component={Biography} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={Error} />
          </Switch>
        </Router>
      </CycleContext.Provider>
    </LanguageContext.Provider>
  );
};

export { App };
