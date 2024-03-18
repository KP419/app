import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
  return (
    <div className="product">
      <img src="./images/Makeup1" />
      <h6>{props.info.title}</h6>
      <label> ${props.info.price} </label>
      <QuantityPicker />
    </div>
  );
}

export default Product;
