import React from "react";
import { Link } from "react-router-dom";

const Cartridge = ({ Game, Price, id }) => {
  const image = "/assets/box-art/" + Game.replace(/:/g, " -") + ".png";
  return (
    <article className="product">
      <img src={image} alt={Game} />
      <h4>{Game}</h4>
      <p>${Price}</p>
      <Link className="btn" to={`/details/${id}`}>
        Learn More
      </Link>
    </article>
  );
};

export default Cartridge;
