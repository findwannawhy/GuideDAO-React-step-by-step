import { useState } from "react";

export default function Item({ name, desc, image }) {
  const [amount, setAmount] = useState(0);
  const handlePlusButton = () => setAmount(amount + 1);
  const handleMinusButton = () => setAmount(amount - 1);

  return (
    <div className="item">
      <img src={image} className="item-image" />
      <div className="item-info">
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-button"
          disabled={!amount}
          onClick={handleMinusButton}
        >
          -
        </button>
        <h3 className="item-total">{amount ? amount : ""}</h3>
        <button className="item-button" onClick={handlePlusButton}>
          +
        </button>
      </div>
    </div>
  );
}
