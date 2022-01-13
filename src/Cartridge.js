import React from "react";

const Cartridge = ({ Game, Price }) => {
  const image = "/assets/box-art/" + Game.replace(/:/g, " -") + ".png";
  return (
    <article className="product">
      <img src={image} alt={Game} />
      <h4>{Game}</h4>
      <p>${Price}</p>
      <button className="btn">Comprar</button>
    </article>
  );
};

export default Cartridge;
