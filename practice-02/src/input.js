import clsx from "clsx";

export default Input = ({ type = "text", className, ...rest }) => (
  <input className={clsx(className, "ui-textfield")} type={type} {...rest} />
);
