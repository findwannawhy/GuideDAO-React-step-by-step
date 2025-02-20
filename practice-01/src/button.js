export default Button = ({ type, disabled, label }) => (
  <button className="ui-button" type={type} disabled={disabled}>
    {label}
  </button>
);
