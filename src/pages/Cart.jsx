import "./Cart.css";
import { useContext } from "react";
import DataContext from "../context/dataContex";
import constants from "../common/config";

function Cart() {
    const cart = useContext(DataContext).cart;

    function getNumProducts() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const prod = cart[i];
            total += prod.quantity;
        }
        return total;
    }

    function getTotalPrice() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const prod = cart[i];
            total += prod.price * prod.quantity;
        }
        return total.toFixed(2);
    }

    return (
        <div className="cart-page">
            <h1 className="cart-heading">Shopping Cart</h1>
            <div className="cart-container">
                <h2 className="cart-total">
                    Total Products {getNumProducts()} in your cart
                </h2>
                {cart.map((prod) => (
                    <div key={prod.id} className="cart-item">
                        <div className="cart-item-details">
                            <img src={constants.IMAGE_PATH + prod.image} alt="" />
                            <h5 className="cart-item-title">{prod.title}</h5>
                            <p className="cart-item-price">Price: ${prod.price}</p>
                            <p className="cart-item-quantity">Quantity: {prod.quantity}</p>
                            <p className="cart-item-total">
                                Total: ${prod.price * prod.quantity}
                            </p>
                        <button>Remove</button>
                        </div>
                    </div>
                ))}
                <div className="cart-total-price">
                    <h3>Cart Total</h3>
                    <p>${getTotalPrice()}</p>
                </div>
            </div>
        </div>
    );
}

export default Cart;
