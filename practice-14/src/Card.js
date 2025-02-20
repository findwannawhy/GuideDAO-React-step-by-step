import clsx from "clsx";
import { Context } from "./Context.js";
import { useContext } from "react";

export default function Card(props) {
  const theme = useContext(Context);
  const classes = clsx({
    dark: theme === "dark",
  });

  return <div className={classes}>{props.children}</div>;
}
