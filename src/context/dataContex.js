import { createContext } from "react";


// context is an interface / definition of the data 
// should not have implementaions which means no logic here 
//  we declare the data we want to have but it will be stored somewhere else 
// elements in the array are imuptable 


const DataContext = createContext({
    cart:[],
    addProductToCart: () => {},
    removeProductFromCart: () => {}
});

export default DataContext;