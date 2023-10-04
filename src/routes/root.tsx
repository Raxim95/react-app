import { Col, Container, Row } from "react-bootstrap";

import OrderCon from "../Components/OrderCon";
import { useAppSelector } from "../redux/hooks";
import pizzasMap from "../data/pizzasMap";
import MyNavbar from "../Components/MyNavbar";

function Root() {
  const items = useAppSelector((state) => state.currentOrder.items);

  return (
    <>
      <MyNavbar></MyNavbar>
      <Container className="main pt-5 ">
        <Row>
          <Col md={6} lg={8}>
            <div className="text-center fw-bold ">
              <h1>Your pizza:</h1>
            </div>
            <Row className="py-4">
              {items.map((item, i) => {
                const pizza = pizzasMap.get(item.id);
                return (
                  <Col sm={6} md={4} lg={3} key={i} className="rounded p-3 ">
                    <img
                      className="w-100 h-100  object-fit-cover "
                      src={pizza.image}
                    ></img>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col md={6} lg={4}>
            <OrderCon></OrderCon>
          </Col>
        </Row>
      </Container>
      <Container></Container>
    </>
  );
}

export default Root;
