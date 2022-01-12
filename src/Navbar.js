import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ carrinho }) => {
  return (
    <nav>
      <Link to="/">🏠Home</Link>
      <Link to="/about">🧻About</Link>
      <Link to="/store">💵Store</Link>
      <Link to="/carto">🚗Carrinho ()</Link>
    </nav>
  );
};

export default Navbar;
