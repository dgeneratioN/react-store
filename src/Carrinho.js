import React, { useEffect, useState } from "react";
import { data } from "./data";

const Carrinho = ({ carrinho }) => {
  const [cep, mudarCep] = useState("");
  const [endereco, mudarEndereco] = useState();
  const onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    mudarCep(
      value
        .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{5})(\d)/, "$1-$2") // captura os 5 primeiros dígitos e insere um hífen
        .replace(/(-\d{3})\d+?$/, "$1") // impede que se digite mais de três caracteres neste segundo grupo
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cep) alert("❌ Você não inseriu nenhum cep! ❌");
    else {
      const meucep = document.querySelector("form > input").value;
      const url = `https://viacep.com.br/ws/${meucep}/json`;
      var data = {};
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          data = {
            rua: res["logradouro"],
            bairro: res["bairro"],
            cidade: res["localidade"],
            estado: res["uf"],
          };
          if (data.rua) mudarEndereco(data);
          else alert("CEP não foi encontrado");
        });
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "left" }}>Carrinho</h2>
      {carrinho.length !== 0 && (
        <ListaCarrinho data={data} carrinho={carrinho} />
      )}
      <form>
        <label>CEP: </label>
        <input
          autoFocus={true}
          type="tel"
          value={cep}
          id="caixaCEP"
          onChange={(e) => onChange(e)}
        />
        <button className="btn" onClick={(e) => handleSubmit(e)}>
          ok
        </button>
      </form>
      {endereco && <Endereco {...endereco} />}
    </>
  );
};

const Endereco = ({ rua, bairro, cidade, estado }) => {
  return (
    <>
      <p>
        Você está em{" "}
        <b style={{ color: "red" }}>
          {rua}, {bairro}, {cidade}, {estado}{" "}
        </b>
        <br />e infelizmente a gente não entrega aí nesse fim de mundo
      </p>
    </>
  );
};

const ListaCarrinho = ({ carrinho }) => {
  const [preco, setPreco] = useState(0);
  useEffect(() => {
    let meupreco = 0;
    carrinho.forEach((o) => {
      meupreco += o.Price;
    });
    setPreco(meupreco);
  }, [carrinho]);
  return (
    <>
      {carrinho.map((o) => {
        return (
          <h4 key={o.Game} className="item">
            {o.Game}
            <p>${o.Price}</p>
          </h4>
        );
      })}
      <h4 key="total" className="item">
        Total<p>${preco.toFixed(2)}</p>
      </h4>
    </>
  );
};

export default Carrinho;
