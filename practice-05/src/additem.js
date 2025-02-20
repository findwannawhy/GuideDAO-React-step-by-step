export default function AddItem(props) {
  return (
    <form onSubmit={props.onAddSubmit}>
      <div>
        <label htmlFor="item-name">Название товара:</label>
        <input
          id="item-name"
          type="text"
          placeholder="Название товара"
          className="ui-textfield"
          value={props.inputNameValue}
          onChange={props.onNameChange}
        />
      </div>
      <div>
        <label htmlFor="item-desc">Описание:</label>
        <input
          id="item-desc"
          type="text"
          placeholder="Описание товара"
          className="ui-textfield"
          value={props.inputDescValue}
          onChange={props.onDescChange}
        />
      </div>
      <div className="form-footer">
        <div className="validation">
          {props.validator ? "" : "Поля не заполнены!"}
        </div>
        <input
          type="submit"
          className="ui-button"
          value="Добавить"
          disabled={!props.validator}
        />
      </div>
    </form>
  );
}
