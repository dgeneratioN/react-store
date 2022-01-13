import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "./data";

const Details = ({ addToCart }) => {
  const [image, setimage] = useState("");
  const [snap, setsnap] = useState("");
  const { id } = useParams();
  const [g, setG] = useState({
    Game: "No Game",
    Year: 2022,
    Dev: "VALVe",
    Genre: "Porn",
    Price: -69.99,
  });
  const comprar = () => {
    const { Game, Price } = g;
    addToCart({ Game, Price });
  };
  useEffect(() => {
    const mygame = data.find((o) => o.id === parseInt(id));
    if (mygame) {
      setG(mygame);
      setimage("/assets/box-art/" + mygame.Game.replace(/:/g, " -") + ".png");
      setsnap("/assets/snaps/" + mygame.Game.replace(/:/g, " -") + ".png");
    }
  }, []);
  return (
    <article className="product-detailed">
      <span>
        <img src={image} alt={g.Game} />
      </span>
      <img src={snap} alt={g.Game} />
      <h2>{g.Game}</h2>
      <h3>{g.Year}</h3>
      <h4>{g.Dev}</h4>
      <h5>{g.Genre}</h5>
      <p>${g.Price}</p>
      <button
        className="btn"
        onClick={() => {
          comprar();
        }}
      >
        Comprar
      </button>
    </article>
  );
};

export default Details;
