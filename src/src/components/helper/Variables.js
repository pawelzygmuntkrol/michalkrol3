import { css, keyframes } from "styled-components";

// COLOR
const WHITE = "rgb(255, 255, 255, 1)";
const DIMGRAY = "rgb(105, 105, 105, 1)";
const DARK = "rgb(50, 50, 50, 1)";
const BLACK = "rgb(0, 0, 0, 1)";
const OPAQUE_BLACK = "rgba(0, 0, 0, 0.9)";

//SIZE
const HEADER_FONT = "5rem";
const TITLE_FONT = "2rem";
const REGULAR_FONT = "1rem";
const MOBILE_HEADER_FONT = "3rem";
const MOBILE_FONT = "0.8rem";
const SMALL_MOBILE_FONT = "0.7rem";

//FLEXBOX
const Flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlexJustifyBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexAlignStart = css`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

//DIMENSIONS
const DimensionsView = css`
  width: 100vw;
  height: 100vh;
`;

const DimensionsPercent = css`
  width: 100%;
  height: 100%;
`;

//KEYFRAMES
const ChangeOpacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ChangeColor = keyframes`
  from {
    color: ${WHITE};
  }

  to {
    color: ${DARK};
  }
`;

export {
  WHITE,
  DIMGRAY,
  DARK,
  BLACK,
  OPAQUE_BLACK,
  HEADER_FONT,
  TITLE_FONT,
  REGULAR_FONT,
  MOBILE_HEADER_FONT,
  MOBILE_FONT,
  SMALL_MOBILE_FONT,
  Flex,
  FlexJustifyBetween,
  FlexAlignStart,
  DimensionsView,
  DimensionsPercent,
  ChangeOpacity,
  ChangeColor,
};
