import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    let newVal = quantity + 1;
    setQuantity(newVal);
    props.onChange(newVal);
  }

  function decrease() {
    if (quantity > 1) {
      let newVal = quantity - 1;
      setQuantity(newVal);
      props.onChange(newVal);
    }
  }

  return (
    <div className="quantityPicker">
      <button
        className="btn btn-outline-dark"
        disabled={quantity === 1}
        onClick={decrease}
      >
        -
      </button>
      <label className="quantity-label">{quantity}</label>
      <button className="btn btn-outline-dark" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
