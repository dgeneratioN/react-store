import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";

//#ECECEC

const Cartridge = ({ Game, Price, Genre, id, addItem }) => {
  const image = "/assets/box-art/" + Game.replace(/:/g, " -") + ".png";
  return (
    <Card
      bg="dark"
      text="white"
      className="border border-white border-4 rounded h-100 shadow"
      style={{ width: "23rem" }}
    >
      <Card.Img variant="top" src={image} alt={Game} />
      <Card.Title as="h2" className="mt-3 px-3">
        {Game}
      </Card.Title>
      <Card.Body className="d-flex flex-column">
        <div className="mb-auto"></div>
        <div>
          <Card.Subtitle className="text-muted">{Genre}</Card.Subtitle>
          <Card.Text>${Price}</Card.Text>
        </div>

        <ButtonGroup className="d-flex justify-content-end ms-auto">
          <Button href={`/store/${id}`}>Detalhes</Button>
          <Button variant="success" onClick={() => addItem(id)}>
            <img src="cart.png" alt="cart" />
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default Cartridge;
