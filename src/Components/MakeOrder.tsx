import { Button, Col, InputGroup, ListGroup, Row } from "react-bootstrap";
import PizzaType from "../types/PizzaType";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useState } from "react";

function MakeOrder({ pizza }: { pizza: PizzaType }) {
  const [count, setCount] = useState(0);

  const currentOrder = useAppSelector((state) => state.currentOrder.value);
  const dispatch = useAppDispatch();

  const decrease = () => {
    setCount((prev) => prev + 1);
  };
  const increase = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <ListGroup.Item>
      <Row className="flex align-items-center" style={{ width: "fitContent" }}>
        <Col className="py-2">
          <span className="fw-bold fs-6 ">{pizza.name}</span>
          <br />
          <span className="text-secondary">{pizza.price} $</span>
        </Col>
        <Col>
          <InputGroup className="flex justify-content-end ">
            <Button variant="danger" onClick={decrease}>
              -
            </Button>
            <span
              className="d-flex align-items-center justify-content-center"
              style={{ width: "50px" }}
            >
              {count}
            </span>
            <Button variant="success" onClick={increase}>
              +
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default MakeOrder;
