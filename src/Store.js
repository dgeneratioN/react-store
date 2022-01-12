import React from "react";
import Cartridge from "./Cartridge";

const Store = ({ addItem, data }) => {
  return (
    <>
      <h2>Nintendo 64 Games</h2>
      <section className="products">
        {data.map((o) => {
          return <Cartridge key={o.Game} addToCart={addItem} {...o} />;
        })}
      </section>
    </>
  );
};

export default Store;
