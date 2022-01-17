import React from "react";
import Cartridge from "./Cartridge";
import { data } from "./data";
import { Container, Row, Col } from "react-bootstrap";

const Store = ({ addItem }) => {
  return (
    <>
      <Container>
        <Row className="m-4">
          {data.map((o) => {
            return (
              <Col className="m-2" key={o.id}>
                <Cartridge addItem={addItem} {...o} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Store;
