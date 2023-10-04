import { Button, Col, InputGroup, ListGroup, Row } from "react-bootstrap";
import PizzaType from "../types/PizzaType";
import { useAppDispatch } from "../redux/hooks";
import { update } from "../redux/slices/currentOrderSlice";

function MakeOrder({ pizza, count }: { pizza: PizzaType; count: number }) {
  const dispatch = useAppDispatch();

  const handleClick = (amount: number) => {
    const newSingleOrder = {
      id: pizza.id,
      price: pizza.price,
      count: count + amount,
    };
    dispatch(update(newSingleOrder));
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
            <Button variant="danger" onClick={() => handleClick(-1)}>
              -
            </Button>
            <span
              className="d-flex align-items-center justify-content-center bg-light"
              style={{ width: "50px" }}
            >
              {count}
            </span>
            <Button variant="success" onClick={() => handleClick(1)}>
              +
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default MakeOrder;
