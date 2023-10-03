import { Button, ListGroup } from "react-bootstrap";
import MakeOrder from "./MakeOrder";
import pizzasData from "../data/pizzasData";
import PizzaType from "../types/PizzaType";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { findItemById } from "../redux/slices/utils";
import { reset } from "../redux/slices/currentOrderSlice";

function OrderCon() {
  const items = useAppSelector((state) => state.currentOrder.items);
  const total = useAppSelector((state) => state.currentOrder.total);

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="d-flex flex-row justify-content-between align-items-center px-4 pt-3 ">
        <div>Your pizza</div>
        <div>
          <span className="rounded bg-secondary text-light px-2">
            {total} $
          </span>
        </div>
        <div>
          <Button
            className="bg-warning border-0 p-1"
            onClick={() => dispatch(reset())}
          >
            Reset pizza
          </Button>
        </div>
      </div>
      <div className="my-4">
        <ListGroup style={{ width: "fit-content" }}>
          {pizzasData.map((pizza, i) => {
            const item = findItemById(pizza.id, items);
            return (
              <MakeOrder
                key={i}
                pizza={pizza as PizzaType}
                count={item ? item.count : 0}
              ></MakeOrder>
            );
          })}
          <ListGroup.Item className="bg-light p-3 ">
            Total <span className="fw-bold float-end ">{total} $</span>
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
