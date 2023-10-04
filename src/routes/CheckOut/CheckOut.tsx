import { Provider } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import store from "../../redux/store";
import { Col, Container, Row } from "react-bootstrap";
import PizzaType from "../../types/PizzaType";
import pizzasMap from "../../data/pizzasMap";
import CheckOutForm from "./CheckOutForm";

function CheckOut() {
  const items = useAppSelector((state) => state.currentOrder.items);
  const total = useAppSelector((state) => state.currentOrder.total);

  return (
    <Container>
      <div className="fs-2 fw-bold  text-center my-4">Ingredient Info</div>
      <Row>
        {items.map((item, i) => {
          const pizza: PizzaType = pizzasMap.get(item.id);
          return (
            <Col md={4} key={i} className="d-flex flex-column ">
              <p className="fw-bold text-center" style={{ height: "2em" }}>
                {pizza.name}
              </p>
              <img src={pizza.image} className="w-100 my-2" />
              <p className="text-center fs-4 ">{item.count}</p>
            </Col>
          );
        })}
      </Row>
      <div className="fs-2 fw-bold  text-center my-3">CheckOut Info</div>
      <CheckOutForm></CheckOutForm>
    </Container>
  );
}

function CheckOutRoot() {
  return (
    <Provider store={store}>
      <CheckOut />
    </Provider>
  );
}

export default CheckOutRoot;
