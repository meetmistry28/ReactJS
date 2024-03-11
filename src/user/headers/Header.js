import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {

  return (
    <div>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/products">Product</NavLink>

      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default Header;
