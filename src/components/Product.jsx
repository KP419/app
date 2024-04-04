import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import constants from "../common/config";
import { useState, useContext } from "react";

import DataContext from "../context/dataContex";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  let addProductToCart = useContext(DataContext).addProductToCart;

  function add() {
  let prod = {...props.info};
  prod.quantity=quantity;
  addProductToCart(prod);
  console.log(prod);
  console.log(props.info);

    }

  function quantiyChange(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.info.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <img src={constants.IMAGE_PATH + props.info.image} alt="Main Product" />
      <h6>{props.info.title}</h6>

      <label className="total"> ${getTotal()} </label>

      <label className="price"> ${props.info.price.toFixed(2)} </label>

      <QuantityPicker onChange={quantiyChange} />
      <button onClick={add} type="button" class="btn btn-success">
        Cart
      </button>
    </div>
  );
}

export default Product;
