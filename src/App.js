import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { data } from "./data";
import Home from "./Home";
import Store from "./Store";
import Navbar from "./Navbar";
import Carrinho from "./Carrinho";

function App() {
  const [carrinho, mudarCarrinho] = useState([]);
  const addItem = (item) => {
    if (carrinho.includes(item["Game"])) return;
    mudarCarrinho(carrinho.concat(item));
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/store"
            element={<Store data={data} addItem={addItem} />}
          />
          <Route path="/carto" element={<Carrinho carrinho={carrinho} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

const About = () => {
  return (
    <>
      <section style={{ textAlign: "left" }}>
        <p>
          <b>Security Guard</b>: "Hey, Mr. Freeman. I had a bunch of messages
          for you, but we had a system crash about 20 minutes ago, and I'm still
          tryin to find my files. Just one of those days, I guess. They were
          havin some problems down in the test chamber, too, but I think that's
          all straightened out. They told me to make sure you headed down there
          as soon as you got into your hazard suit."
        </p>

        <p>Freeman pushes a button, causing a computer terminal to pop up. </p>

        <p>
          <b>Scientist</b>: "Get away from there, Freeman! I'm expecting an
          important message!"
        </p>

        <p>
          <b>Scientist</b>: "My God! What are you doing?!" Guard: "Hey, stop
          that! Come on, Gordon, are you trying to get me into trouble?"
        </p>

        <p>
          Freeman heads into the complex, overhearing some of the conversation
          between the scientists. Heading toward the test chamber, Freeman is
          stopped by the security guard.
        </p>

        <p>
          <b>Guard</b>: "Sorry, Mr. Freeman, I got explicit orders not to let
          you through without your hazard suit on."{" "}
        </p>
      </section>
    </>
  );
};
