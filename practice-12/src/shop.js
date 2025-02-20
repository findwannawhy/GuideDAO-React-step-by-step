import { useState, useEffect } from "react";
import Item from "./item.js";
import "./styles.css";
import useFetch from "./useFetch.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const { get, loader } = useFetch();

  useEffect(() => {
    (async () => {
      try {
        const resp = await get(
          "https://learn.guidedao.xyz/api/student/products"
        );
        setItems(resp);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="shop">
      {loader
        ? "Загрузка..."
        : items.flat(2).map((item) => <Item key={item.id} info={item} />)}
    </div>
  );
}
