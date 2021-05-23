import React from "react";

export const CycleContext = React.createContext({
  cycle: "",
  cycleButtonName: "",
  changeCycle: () => {},
});
