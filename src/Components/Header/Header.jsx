import React, { useContext } from "react";
import logo from "../../assets/images/Logo.svg";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(userContext);
  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="header py-5 px-24">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <div className="flex justify-between items-center gap-5 capitalize">
        <NavLink to={"/"}>Shop</NavLink>
        <NavLink to={"/inventory"}>Inventory</NavLink>
        {!user && (
          <>
            <NavLink to={"/order"}>Order</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </>
        )}
        {user && (
          <p className="text-gray-50 lowercase">
            {user.email}
            <span onClick={handleLogout} className="btn ml-3">
              Sign Out
            </span>
          </p>
        )}
      </div>
    </nav>
  );
};

export default Header;
