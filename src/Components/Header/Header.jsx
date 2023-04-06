import React from "react";
import logo from "../../assets/images/Logo.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header py-5 px-24">
      <a href="index.html">
        <img src={logo} alt="" />
      </a>
      <div className="flex justify-between items-center gap-5 capitalize">
        <NavLink to={"/"}>Shop</NavLink>
        <NavLink to={"/order"}>Order</NavLink>
        <NavLink to={"/inventory"}>Inventory</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </nav>
  );
};

export default Header;
