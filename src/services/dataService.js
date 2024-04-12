import axios from "axios";
import Product from '../components/Product';

const data = [
    {
        title: "Strawberry",
        price: 1.89,
        category: "fresh fruit",
        image: "strawberry.jpg",
        _id: "1",
    },
    {
        title: "banana ",
        price: 1.89,
        category: "fresh fruit",
        image: "banana.jpg",
        _id: "2",
    },
    {
        title: "grapes",
        price: 2.89,
        category: "fresh fruit",
        image: "grape.jpg",
        _id: "3",
    },
    {
        title: "eggs",
        price: 2.89,
        category: "by the dozen",
        image: "egg.jpg",
        _id: "4",
    },
    {
        title: "Sweater",
        price: 22.89,
        category: "by the dozen",
        image: "sweater.jpg",
        _id: "5",
    },
    {
        title: "Merch Bundle",
        price: 102.89,
        category: "by the dozen",
        image: "merch.jpg",
        _id: "6",
    },
];

class DataService {
    async getCatalog() {
        // without a server
        // return data; (just uncomment this line 

        // call the server then comment all the others
        let response = await axios.get("http://127.0.0.1:5000/api/products");
        return response.data;
    }

    async saveProduct(product) {
        let response = await axios.post("http://127.0.0.1:5000/api/products", product);
        return response.data;
    }
}

export default DataService;
