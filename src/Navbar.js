import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navsup = ({ carrinho }) => {
  const [qtd, setqtd] = useState(0);
  useEffect(() => {
    setqtd(carrinho && carrinho.length);
  }, [carrinho]);
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        className="rounded-pill sombra my-1"
      >
        <Container>
          <Link className="navbar-brand" to="/">
            <img
              alt=""
              src="n64-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            N64Store
          </Link>
          <Nav className="me-auto">
            <Link to="/about" className="nav-link">
              Sobre
            </Link>
            <Link to="/store" className="nav-link">
              Loja
            </Link>
            <Link to="/cart" className="nav-link">
              Carrinho ({qtd})
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navsup;
