import clsx from "clsx";

export default Button = (props) => {
  const { className, label, ...rest } = props;
  return (
    <button className={clsx(className, "ui-button")} {...rest}>
      {label}
    </button>
  );
};
