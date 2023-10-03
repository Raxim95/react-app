import { Button, ListGroup } from "react-bootstrap";
import MakeOrder from "./MakeOrder";
import pizzasData from "../data/pizzasData";
import PizzaType from "../types/PizzaType";

function OrderCon() {
  return (
    <>
      <div className="d-flex flex-row justify-content-between align-items-center px-4 pt-3 ">
        <div>Your pizza</div>
        <div>
          <span className="rounded bg-secondary text-light px-2">3.00 $</span>
        </div>
        <div>
          <Button className="bg-warning border-0 p-1">Reset pizza</Button>
        </div>
      </div>
      <div className="my-4">
        <ListGroup style={{ width: "fit-content" }}>
          {pizzasData.map((pizza, i) => (
            <MakeOrder key={i} pizza={pizza as PizzaType}></MakeOrder>
          ))}
          <ListGroup.Item className="bg-light p-3 ">
            Total <span className="fw-bold float-end ">3.00$</span>
          </ListGroup.Item>
          <ListGroup.Item className="p-3 ">
            <Button variant="success">Save Pizza</Button>
            <Button className="float-end">Check out</Button>
          </ListGroup.Item>
          <ListGroup.Item className="p-3 ">
            <Button variant="dark">Load pizza</Button>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default OrderCon;
