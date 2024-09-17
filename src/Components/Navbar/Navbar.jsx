import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import menu_icon from "../Assests/breadcrum_arrow.png"; // Add a burger menu icon
import close_icon from "../Assests/cart_cross_icon.png"; // Add a close icon
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [sidebar, setSidebar] = useState(false); // Sidebar state

  const { getTotalCartItem } = useContext(ShopContext);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Shooper</p>
      </div>

      {/* Regular menu */}
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            SHOP
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: "none" }} to="/mens">
            MEN
          </Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: "none" }} to="/womens">
            WOMEN
          </Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            KIDS
          </Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      {/* Cart and login buttons */}
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <img src={menu_icon} alt="menu" />
      </div>

      {/* Sidebar (visible only on mobile screens) */}
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <div className="close-icon" onClick={toggleSidebar}>
          <img src={close_icon} alt="close" />
        </div>
        <ul className="sidebar-menu">
          <li
            onClick={() => {
              setMenu("shop");
              toggleSidebar();
            }}
          >
            <Link to="/">SHOP</Link>
          </li>
          <li
            onClick={() => {
              setMenu("mens");
              toggleSidebar();
            }}
          >
            <Link to="/mens">MEN</Link>
          </li>
          <li
            onClick={() => {
              setMenu("womens");
              toggleSidebar();
            }}
          >
            <Link to="/womens">WOMEN</Link>
          </li>
          <li
            onClick={() => {
              setMenu("kids");
              toggleSidebar();
            }}
          >
            <Link to="/kids">KIDS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
