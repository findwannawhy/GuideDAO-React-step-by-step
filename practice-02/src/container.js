import clsx from "clsx";

export default Container = ({ children, className, ...rest }) => (
  <div className={clsx(className, "ui-container")} {...rest}>
    {children}
  </div>
);
