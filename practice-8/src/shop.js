import { useState, useEffect } from "react";
import AddItem from "./additem.js";
import ItemList from "./itemlist.js";

export default function Shop() {
  const [items, setItems] = useState(() => {
    const tempItems = localStorage.getItem("items");
    if (tempItems == null) {
      return [];
    }
    return JSON.parse(tempItems);
  });

  const [inputNameValue, setInputNameValue] = useState("");
  const [inputDescValue, setInputDescValue] = useState("");
  const [validator, setValidator] = useState(false);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    if (items.length) {
      document.title = `${items.length} товаров`;
    } else {
      document.title = "Товары отсутствуют";
    }
  }, [items]);

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
    <div className="max-w-2xl mx-auto p-4">
      <AddItem
        onAddSubmit={handleAddSubmit}
        inputNameValue={inputNameValue}
        onNameChange={handleNameChange}
        inputDescValue={inputDescValue}
        onDescChange={handleDescChange}
        validator={validator}
      />

      <div className="mt-4">
        <p className="text-lg font-medium">
          {items.length ? "" : "Добавьте первый товар"}
        </p>
      </div>

      <ItemList items={items} onDeleteButton={handleDeleteButton} />
    </div>
  );
}
