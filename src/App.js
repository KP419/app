import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import QuantityPicker from "./components/QuantityPicker";
import ShoppingList from "./pages/Shoppinglist";


import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Catalog />
      <About/>
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;
