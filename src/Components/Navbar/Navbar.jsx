import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="GlamourGateway Logo" />
        <p>GlamourGateway</p>
      </div>
      <button className="menu-toggle" onClick={toggleSideMenu}>
        ☰
      </button>
      <ul className={`nav-menu ${isSideMenuOpen ? "active" : ""}`}>
        <li onClick={() => setMenu("shop")}>
          <Link className="nav-link" to="/">
            SHOP
          </Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link className="nav-link" to="/mens">
            MEN
          </Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link className="nav-link" to="/womens">
            WOMEN
          </Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link className="nav-link" to="/kids">
            KIDS
          </Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="nav-login-btn">Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
      {isSideMenuOpen && <div className="overlay" onClick={toggleSideMenu}></div>}
    </div>
  );
};

export default Navbar;
