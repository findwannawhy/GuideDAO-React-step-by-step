import { useState } from "react";
import ItemsList from "./itemsList";
import AddItem from "./addItem";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");
  const [loader, setLoader] = useState(false);

  const postItem = async (item) => {
    setLoader(true);
    const configuration = {
      method: "POST",
      body: JSON.stringify({
        name: item.name,
        desc: item.desc,
      }),
      headers: { "Content-Type": "application/json" },
    };

    try {
      const resp = await fetch(
        "https://learn.guidedao.xyz/api/student/products",
        configuration
      );
      const data = await resp.json();
      console.log(data);
      return true;
    } catch (error) {
      console.error("Ошибка:", error);
      return false;
    } finally {
      setLoader(false);
    }
  };

  async function handleFormSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setValid("Введите название");
      return;
    }
    if (!desc.trim()) {
      setValid("Введите описание");
      return;
    }

    const newItem = {
      id: crypto.randomUUID(),
      name,
      desc,
    };

    const success = await postItem(newItem);
    if (success) {
      setItems((prevItems) => [...prevItems, newItem]);
      setName("");
      setDesc("");
      setValid("");
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);
    setValid("");
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
    setValid("");
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
      />
      {loader && <p>Добавляем товар...</p>}
      {items.length === 0 && <p>Добавьте первый товар</p>}
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </>
  );
}
