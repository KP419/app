import { useState } from "react";
import DataContext from "./dataContex";

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);

    function addProductToCart(prod) { 
        console.log('Global fn');

        // add prod to cart
        var copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }

    function removeProductFromCart() { }

    return (
        <DataContext.Provider
            value={{
                cart: cart,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;

