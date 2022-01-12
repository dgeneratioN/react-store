import React from "react";

const Details = ({ Game, Price, Year, Dev, Genre }) => {
  const image = "/assets/box-art/" + Game.replace(/:/g, " -") + ".png";
  const snap = "/assets/snaps/" + Game.replace(/:/g, " -") + ".png";
  return (
    <article className="product">
      <img src={image} alt={Game} />
      <img src={snap} alt={Game} />
      <h2>{Game}</h2>
      <h3>{Year}</h3>
      <h4>{Dev}</h4>
      <h5>{Genre}</h5>
      <p>${Price}</p>
      <button className="btn">Comprar</button>
    </article>
  );
};

export default Details;
