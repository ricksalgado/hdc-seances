import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Catalog from "./components/Catalog";
import ThankYou from "./components/ThankYou";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Catalogo</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
      <div className="container">
      <Routes>
        <Route path="/" element={<Catalog/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/thankyou" element={<ThankYou/>}></Route>
      </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
