import clsx from "clsx";

export default Link = ({ className, label, ...rest }) => (
  <a className={clsx(className, "ui-link")} {...rest}>
    {label}
  </a>
);
