import "./App.css";

import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <>
      {/* 5.1 - Setup and initial configuration */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* 5.2 - NavLink */}
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          {/* 5.3 - useNavigate */}
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={ <Login /> } />
      </Routes>

      <h3>TA DANDO CERTO, PORRA</h3>
    </>
  );
}

export default App;
