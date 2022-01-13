import React from "react";
import Cartridge from "./Cartridge";
import { data } from "./data";

const Store = () => {
  return (
    <>
      <h2>Nintendo 64 Games</h2>
      <section className="products">
        {data.map((o) => {
          return <Cartridge key={o.id} {...o} />;
        })}
      </section>
    </>
  );
};

export default Store;
