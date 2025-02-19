import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);
  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center m-4">
      <img
        src={info.image}
        alt={info.name}
        className="w-48 h-48 object-cover rounded mb-4"
      />
      <div className="text-center">
        <h2 className="text-xl font-bold">{info.name}</h2>
        <p className="text-gray-600 mt-2">{info.desc}</p>
      </div>
      <div className="flex items-center mt-4">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded disabled:opacity-50"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="mx-4 text-lg">{total ? total : ""}</h3>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
