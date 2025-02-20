import React, { createContext } from "react";

const Context = createContext();

function Provider(props) {
  const theme = "dark";

  return <Context.Provider value={theme}>{props.children}</Context.Provider>;
}

export { Context, Provider };
