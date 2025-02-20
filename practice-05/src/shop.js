import { useState } from "react";
import Item from "./item.js";
import AddItem from "./additem.js";
import ItemList from "./itemlist.js";

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
      <AddItem
        onAddSubmit={handleAddSubmit}
        inputNameValue={inputNameValue}
        onNameChange={handleNameChange}
        inputDescValue={inputDescValue}
        onDescChange={handleDescChange}
        validator={validator}
      />

      <div>
        <p className="ui-title">
          {items.length ? "" : "Добавьте первый товар"}
        </p>
      </div>

      <ItemList items={items} onDeleteButton={handleDeleteButton} />
    </>
  );
}
