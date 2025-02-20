export default Input = ({ placeholder, name, type = "text" }) => (
  <input
    className="ui-textfield"
    type={type}
    placeholder={placeholder}
    name={name}
  />
);
