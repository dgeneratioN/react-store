import React, { useEffect, useState } from "react";
import { data } from "./data";
import { ListGroup } from "react-bootstrap";

const Carrinho = ({ carrinho }) => {
  return (
    <>
      <h2>Carrinho</h2>
      {carrinho.length !== 0 && (
        <div>
          <ListaCarrinho data={data} carrinho={carrinho} />
          <CaixaCEP />
        </div>
      )}
    </>
  );
};

const CaixaCEP = () => {
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
  const Endereco = ({ rua, bairro, cidade, estado }) => {
    return (
      <>
        <p>
          Você está em{" "}
          <b>
            {rua}, {bairro}, {cidade}, {estado}{" "}
          </b>
          <br />e infelizmente a gente não entrega aí nesse fim de mundo
        </p>
      </>
    );
  };
  return (
    <>
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

const ListaCarrinho = ({ carrinho }) => {
  const [preco, setPreco] = useState(0);
  useEffect(() => {
    let meupreco = 0;
    if (carrinho) {
      carrinho.forEach((o) => {
        meupreco += data.find((x) => x.id === parseInt(o)).Price;
      });
      setPreco(meupreco);
    }
  }, [carrinho]);
  return (
    <ListGroup>
      {data.map((o) => {
        if (carrinho.includes(o.id))
          return (
            <ListGroup.Item
              key={o.id}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{o.Game}</div>${o.Price}
              </div>
              <button className="btn">❌</button>
            </ListGroup.Item>
          );
        else return null;
      })}
      <ListGroup.Item
        key="total"
        className="d-flex justify-content-between align-items-end bg-secondary text-light"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold ">Total</div>${preco}
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Carrinho;
