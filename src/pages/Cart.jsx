import "./Cart.css";
import { useContext } from "react";
import DataContext from '../context/dataContex';


function Cart() {
    const cart = useContext(DataContext).cart;

    function getNumProducts() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += prod.quantity; 
        }
        return total;
    }

    return (
        <div className="cart page">
            <h1>Cart</h1>
            <div>
                <h2>Total Products {getNumProducts()} we have them ready</h2>
            </div>
        </div>
    );
}

export default Cart;
