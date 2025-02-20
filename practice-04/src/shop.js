import { useState } from "react";
import Item from "./item.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputDescValue, setInputDescValue] = useState("");
  const [validator, setValidator] = useState(false);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setInputNameValue(newName);
    setValidator(newName.trim() !== "" && inputDescValue.trim() !== "");
  };

  const handleDescChange = (e) => {
    const newDesc = e.target.value;
    setInputDescValue(newDesc);
    setValidator(inputNameValue.trim() !== "" && newDesc.trim() !== "");
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        name: inputNameValue,
        desc: inputDescValue,
        id: crypto.randomUUID(),
      },
    ]);
    setInputNameValue("");
    setInputDescValue("");
    setValidator(false);
  };

  const handleDeleteButton = (id) => {
    setItems(items.filter((elem) => elem.id !== id));
  };

  return (
    <>
      <form onSubmit={handleAddSubmit}>
        <div>
          <label htmlFor="item-name">Название товара:</label>
          <input
            id="item-name"
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
            value={inputNameValue}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="item-desc">Описание:</label>
          <input
            id="item-desc"
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
            value={inputDescValue}
            onChange={handleDescChange}
          />
        </div>
        <div className="form-footer">
          <div className="validation">
            {validator ? "" : "Поля не заполнены!"}
          </div>
          <input
            type="submit"
            className="ui-button"
            value="Добавить"
            disabled={!validator}
          />
        </div>
      </form>

      <div>
        <p className="ui-title">
          {items.length ? "" : "Добавьте первый товар"}
        </p>
      </div>

      <ul className="ui-list">
        {items.map((item) => (
          <li className="ui-item-list" key={item.id}>
            <Item info={item} />
            <button
              className="item-button"
              onClick={() => handleDeleteButton(item.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
