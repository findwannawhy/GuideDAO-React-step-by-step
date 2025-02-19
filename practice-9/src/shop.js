import React, { useState, useEffect } from "react";
import Item from "./item.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://learn.guidedao.xyz/api/student/products"
        );
        const data = await response.json();
        if (data) {
          setItems(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Магазин</h1>
      {loader ? (
        <p className="text-center">Загрузка...</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.length > 0
            ? items.flat(2).map((item) => (
                <li key={item.id}>
                  <Item info={item} />
                </li>
              ))
            : <li className="text-center col-span-full">Нет товаров</li>}
        </ul>
      )}
    </div>
  );
}
