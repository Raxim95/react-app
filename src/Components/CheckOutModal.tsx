import { Button, Modal } from "react-bootstrap";
import { useAppSelector } from "../redux/hooks";
import pizzasMap from "../data/pizzasMap";
import PizzaType from "../types/PizzaType";
import { useNavigate } from "react-router";

type props = {
  show: boolean;
  handleClose: () => void;
};

function CheckOutModal({ show, handleClose }: props) {
  const items = useAppSelector((state) => state.currentOrder.items);
  const total = useAppSelector((state) => state.currentOrder.total);

  const navigate = useNavigate();

  return (
    <>
      <Modal show={show} onHide={handleClose} className="text-center">
        <Modal.Header closeButton className="text-center">
          <Modal.Title className="text-center">Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The pizza has following ingredients</p>
          <ul className="list-style-none">
            {items.map((item, i) => {
              const pizza: PizzaType = pizzasMap.get(item.id);
              return (
                <li key={i}>
                  {pizza.name}: {item.count}
                </li>
              );
            })}
          </ul>
          <div className="fs-2">Total price: {total} $</div>
          <p>Continue to checkout?</p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => navigate("checkout")}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckOutModal;
