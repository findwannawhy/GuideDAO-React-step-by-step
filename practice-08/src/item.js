import { useState } from "react";

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

  if (!info) {
    return null;
  }
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <div className="ml-2.5">
        <h2 className="text-[30px] font-semibold">{info.name}</h2>
        <p className="text-base">{info.desc}</p>
      </div>
      <div className="flex items-center mb-[50px] mt-4">
        <button
          className="bg-white text-black border border-[#cccccc] py-1 px-5 min-w-[50px] text-base rounded-[3px] cursor-pointer transition-opacity duration-200 ease-out shadow hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed active:shadow-none active:translate-y-[1px]"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="text-base mx-2">{total ? total : ""}</h3>
        <button
          className="bg-white text-black border border-[#cccccc] py-1 px-5 min-w-[50px] text-base rounded-[3px] cursor-pointer transition-opacity duration-200 ease-out shadow hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed active:shadow-none active:translate-y-[1px]"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
