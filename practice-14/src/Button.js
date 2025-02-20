import clsx from "clsx";
import { Context } from "./Context.js";
import { useContext } from "react";

export default function Button(props) {
  const theme = useContext(Context);
  const classes = clsx({
    dark: theme === "dark",
  });

  return <button className={classes}>{props.children}</button>;
}
