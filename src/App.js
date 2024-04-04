import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import QuantityPicker from "./components/QuantityPicker";
import ShoppingList from "./pages/Shoppinglist";

import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import GlobalProvdier from "./context/GlobalProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <GlobalProvdier>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/shoppinglist" element={<ShoppingList />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvdier>
  );
}

export default App;
