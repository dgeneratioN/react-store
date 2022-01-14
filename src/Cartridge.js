import React from "react";
import { Button, Card, Dropdown } from "react-bootstrap";

const Cartridge = ({ Game, Price, id }) => {
  const image = "/assets/box-art/" + Game.replace(/:/g, " -") + ".png";
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img src={image} alt={Game} />
      <Card.Title>{Game}</Card.Title>
      <Card.Text>${Price}</Card.Text>
      <Button variant="success" href={`/details/${id}`}>
        Detalhes
      </Button>
      <Dropdown>
        <Dropdown.Toggle>Mais</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Comprar</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Enfiar no tico</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Card>
  );
};

export default Cartridge;
