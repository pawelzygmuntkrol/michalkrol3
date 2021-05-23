// MAIN PAGE COMPONENT, DISPLAYS HOMEITEM COMPONENTS

import React, { useContext, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { CycleContext } from "./../cycle-context";
import { Link } from "react-router-dom";
import * as variables from "./helper/Variables";
import styled from "styled-components";
import { HomeItem } from "./HomeItem";
import { Button } from "./helper/Button";
import { PopUp } from "./PopUp";
import { pl } from "./../data/pl";

const Paintings = styled.article`
  ${variables.Flex};
  flex-wrap: wrap;
  width: 100vw;
  height: auto;
  padding: 7rem 0;
`;

const PaintingWrapper = styled.div`
  margin: 0 2vw;
`;

const CycleButtonWrapper = styled.div`
  position: fixed;
  ${variables.Flex};
  left: 40vw;
  width: 20%;
  height: 5rem;
  z-index: 3;
`;

export const Home = () => {
  const usedCycle = useContext(CycleContext);

  const { artworks } = pl; //pl because this data is the same no matter the language

  const { cycleButtonName, cycle, changeCycle } = usedCycle;

  // eslint-disable-next-line
  const [scrollPosition, setScrollPosition] = useState(
    window.scrollTo(0, sessionStorage.getItem("scrollPosition") || 0)
  );
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(sessionStorage.setItem("scrollPosition", position));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MetaTags>
        <title>Structuralist | Structural Collage | Interior</title>
        <meta
          name="description"
          content="Michał Król to młody artysta - outsider i samouk, który tworzy kolaż strukturalny. Wszystkie dotychczasowe prace dostępne są na niniejszej, oficjalnej stronie."
        />
        <meta
          name="keywords"
          content={
            ("Structuralist", "Michał Król", "Structural Collage", "Interior")
          }
        />
      </MetaTags>
      <PopUp />
      <CycleButtonWrapper>
        <Button
          text={cycleButtonName}
          clickHandler={changeCycle}
          color={variables.DARK} //Styled Components props
          noHover={true} //Styled Components props
        />
      </CycleButtonWrapper>
      <Paintings>
        {/* eslint-disable-next-line*/}
        {Object.keys(artworks).map((artwork) => {
          if (artworks[artwork].artworkCycle === cycle) {
            return (
              <PaintingWrapper key={artwork}>
                <Link
                  to={`/artworks/${artwork}`}
                  style={{ textDecoration: "none" }}
                >
                  <HomeItem artworkId={artwork} />
                </Link>
              </PaintingWrapper>
            );
          }
        })}
      </Paintings>
    </>
  );
};
