import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { data } from "./data";
import Home from "./Home";
import Store from "./Store";
import Navbar from "./Navbar";
import Carrinho from "./Carrinho";
import Details from "./Details";
import About from "./About";

function App() {
  const [carrinho, mudarCarrinho] = useState([]);
  const addItem = (item) => {
    if (carrinho.filter((o) => o.Game === item.Game).length !== 0) return;
    mudarCarrinho(carrinho.concat(item));
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar carrinho={carrinho} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/carto" element={<Carrinho carrinho={carrinho} />} />
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
