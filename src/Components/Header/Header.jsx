import React from "react";
import logo from "../../assets/images/Logo.svg";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header py-5 px-24">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <div className="flex justify-between items-center gap-5 capitalize">
        <NavLink to={"/"}>Shop</NavLink>
        <NavLink to={"/order"}>Order</NavLink>
        <NavLink to={"/inventory"}>Inventory</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/signup"}>Sign Up</NavLink>
      </div>
    </nav>
  );
};

export default Header;
