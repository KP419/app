import { useState } from 'react';
import './QuantityPicker.css';

function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    let newVal = quantity + 1;
    setQuantity(newVal);
  }

  function decrease() {
    if (quantity > 1) {
      let newVal = quantity - 1;
      setQuantity(newVal);
    }
  }

  return (
    <div className="quantityPicker">
      <button className="btn btn-outline-light" disabled={quantity == 1 } onClick={decrease}>-</button>
      <label>{quantity}</label>
      <button className="btn btn-outline-light" onClick={increase}>+</button>
    </div>
  );
}

export default QuantityPicker;