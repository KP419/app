import "./Catalog.css";
import Product from "../components/Product";

function Catalog() {
  const data = [
    {
      title: "Subscription",
      price: 19.99,
      category: "Monthly",
      image: "",
      _id: "1",
    },
    {
      title: "W",
      price: 19.99,
      category: "I will help you start",
      image: "img1.jpg",
      _id: "2",
    },
    {
      title: "Teach you how to find animals",
      price: 19.99,
      category: "I can build your studio",
      image: "img1.jpg",
      _id: "3",
    },
  ];

  return (
    <div className="catalog page">
      <h1>My Catalog</h1>
      <Product info={data[0]} />
      <Product info={data[1]} />
      <Product info={data[2]} />
    </div>
  );
}
export default Catalog;
