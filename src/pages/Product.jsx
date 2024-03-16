import "./Product.css";
import "./QuantityPicker"


function Product(props) {

  return (
    <div className="product">
      <img src="https://picsum.photos/200" />
      <h6>{props.info.title}</h6>
      <label> ${props.info.price} </label>
       <QuantityPicker/>
    </div>
  );
}

export default Product;
