import { Button, ListGroup } from "react-bootstrap";
import pizzasData from "../data/pizzasData";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { reset } from "../redux/slices/currentOrderSlice";
import { useState } from "react";
import CheckOutModal from "./CheckOutModal";
import MakeOrderCon from "./OrderedPizzaImages";
import LoadModal from "./LoadModal";
import { setCurrentConfigOrder } from "../redux/slices/utils";

function OrderCon() {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.currentOrder.items);
  // const configItems = useAppSelector((state) => state.configOrder.items);

  const total = useAppSelector((state) => state.currentOrder.total);

  const currentToken = useAppSelector((state) => state.configOrder.current);

  // CheckOutModal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // LoadModal
  const [showload, setShowLoad] = useState(false);
  const handleLoadClose = () => setShowLoad(false);
  const handleLoadShow = () => setShowLoad(true);

  const saveHandler = () => {
    setCurrentConfigOrder(items);
  };

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
        <ListGroup className="mx-auto" style={{ width: "fit-content" }}>
          <MakeOrderCon pizzasData={pizzasData} items={items}></MakeOrderCon>
          <ListGroup.Item className="bg-light p-3 ">
            Total <span className="fw-bold float-end ">{total} $</span>
          </ListGroup.Item>
          {/* Save, Load, Checkout */}
          <ListGroup.Item className="p-3 ">
            <Button disabled={!total} variant="success" onClick={saveHandler}>
              Save Pizza
            </Button>
            <Button
              disabled={!total}
              className="float-end"
              onClick={handleShow}
            >
              Check out
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="p-3 ">
            <Button variant="dark" onClick={handleLoadShow}>
              Load pizza
            </Button>
          </ListGroup.Item>
        </ListGroup>
        {currentToken ? (
          <p className="my-4 text-success text-center">
            Your pizza configuration has been saved. Your number is{" "}
            <b>{currentToken}</b>
          </p>
        ) : (
          <p className="my-4 text-danger text-center">
            Your pizza configuration has not been saved.
          </p>
        )}
      </div>
      <CheckOutModal show={show} handleClose={handleClose}></CheckOutModal>
      <LoadModal show={showload} handleClose={handleLoadClose}></LoadModal>
    </>
  );
}

export default OrderCon;
