import React from "react";

export const LanguageContext = React.createContext({
  language: "",
  changeToPl: () => {},
  changeToEn: () => {},
  changeToDe: () => {},
});
