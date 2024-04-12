import { useState } from "react";
import "./Admin.css";
import Cart from "./Cart";
import DataService from "../services/dataService";

function Admin() {
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });

  const [allCoupons, setAllCoupons] = useState([]);

  const [product, setProduct] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
  });

  const [allProducts, setAllProducts] = useState([]);

  function handleCouponChange(e) {
    const val = e.target.value;
    const name = e.target.name;
    var copy = { ...coupon };
    copy[name] = val;
    setCoupon(copy);
  }

  function saveCoupon() {
    console.log(coupon);
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  function handleProductChange(e) {
    const val = e.target.value;
    const name = e.target.name;
    var copy = { ...product };
    copy[name] = val;
    setProduct(copy);
    // console.log("Product State:", product);
  }

  function saveProduct() {
    console.log(product);
    product.price = parseFloat(product.price);
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);

    let service = new DataService();
    service.saveProduct(product);
  }

  return (
    <div className="admin page">
      <h1>Admin Page</h1>
      <div className="parent">
        <div className="prods">
          <div>
            <h3>Products</h3>
            <div>
              <label className="form-label">Title</label>
              <input
                onChange={handleProductChange}
                name="title"
                type="text"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">Category</label>
              <input
                onChange={handleProductChange}
                name="category"
                type="text"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">Image</label>
              <input
                onChange={handleProductChange}
                name="image"
                type="text"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">Price</label>
              <input
                onChange={handleProductChange}
                name="price"
                type="text"
                className="form-control"
              />
            </div>
            <div className="action">
              <button onClick={saveProduct} className="btn btn-dark">
                Save Product
              </button>
            </div>
          </div>
        </div>
        <div className="coupons">
          <h3>Coupons</h3>
          <div>
            <label className="form-label">Code</label>
            <input
              onChange={handleCouponChange}
              name="code"
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">Discount</label>
            <input
              onChange={handleCouponChange}
              name="discount"
              type="text"
              className="form-control"
            />
          </div>
          <div className="action">
            <button onClick={saveCoupon} className="btn btn-dark">
              Save Coupon
            </button>
          </div>
        </div>
        <div>
          <ul>
            {allCoupons.map((c) => (
              <li>
                {c.code} - ${c.discount}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {allProducts.map((p) => (
              <li>
                {p.title} - {p.category} - {p.image} - ${p.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Admin;
