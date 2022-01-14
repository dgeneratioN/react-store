import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import Store from "./Store";
import Navbar from "./Navbar";
import Carrinho from "./Carrinho";
import Details from "./Details";
import About from "./About";

function App() {
  const [carrinho, mudarCarrinho] = useState([]);
  const addItem = (item) => {
    if (carrinho.includes(item)) return;
    let novocarrinho = [...carrinho, item];
    localStorage.setItem("CARRINHO_LOCAL", JSON.stringify(novocarrinho));
    mudarCarrinho(novocarrinho);
  };
  useEffect(() => {
    console.log("lendo: ", JSON.parse(localStorage.getItem("CARRINHO_LOCAL")));
    if (localStorage.getItem("CARRINHO_LOCAL"))
      mudarCarrinho(JSON.parse(localStorage.getItem("CARRINHO_LOCAL")));
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar carrinho={carrinho} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Carrinho carrinho={carrinho} />} />
          <Route
            path="/details/:id"
            element={<Details addToCart={addItem} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
