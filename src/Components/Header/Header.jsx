import React from "react";
import logo from "../../assets/images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header py-5 px-24">
      <a href="index.html">
        <img src={logo} alt="" />
      </a>
      <div className="flex justify-between items-center gap-5 capitalize">
        <a href="/order">Order</a>
        <a href="/order-review">Order Review</a>
        <a href="/manage-inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
