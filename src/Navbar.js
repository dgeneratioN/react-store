import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ carrinho }) => {
  const [qtd, setqtd] = useState(0);
  useEffect(() => {
    setqtd(carrinho && carrinho.length);
  }, [carrinho]);
  return (
    <nav>
      <Link to="/">🏠Home</Link>
      <Link to="/about">🧻About</Link>
      <Link to="/store">💵Store</Link>
      <Link to="/cart">🚗Carrinho ({qtd})</Link>
    </nav>
  );
};

export default Navbar;
