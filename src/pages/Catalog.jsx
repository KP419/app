import "./Catalog.css";
import Product from "../components/Product";

function Catalog() {
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

  return (
    <div className="catalog page">
      <h1>Looney Farms</h1>
      {data.map((prod) => (
        <Product key={prod._id} info={prod} />
      ))}
    </div>
  );
}

export default Catalog;
