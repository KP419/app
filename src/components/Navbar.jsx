import "./Navbar.css";

import { Link } from "react-router-dom";
import Catalog from "../pages/Catalog";
import About from "../pages/About";
import Admin from "../pages/Admin";
import DataContext from "../context/dataContex";
import { useContext } from "react";
import Cart from '../pages/Cart';

function Navbar() {
  const cart = useContext(DataContext).cart;
  console.log(cart);

  function getNumProducts(){
     let total = 0;
     for (let i=0; i < cart.length; i++){
      let prod = cart[i];
      total += prod.quantity 
     }

     return total;
  }
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="home"></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/catalog"
              >
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/shoppingList"
              >
                Shopping list
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <Link className="btn btn-outline-light" to="/cart">
              {getNumProducts()} Cart 
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
