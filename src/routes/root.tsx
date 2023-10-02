import pizzasData from "../data/pizzasData";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  InputGroup,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

import "./root.scss";
import OrderCon from "../Components/OrderCon";

function Root() {
  return (
    <>
      <Navbar className="bg-dark">
        <Nav>
          <Nav.Link className="text-secondary">Build your pizza</Nav.Link>
          <Nav.Link className="text-light">Ingredients</Nav.Link>
        </Nav>
      </Navbar>
      <Container className="main pt-5 ">
        <Row>
          <Col md={6} lg={8}>
            <div className="text-center fw-bold ">
              <h1>Your pizza:</h1>
            </div>
            <div className="images p-4 me-3 ">
              {pizzasData.map((pizza, i) => {
                return (
                  <div key={i} className="rounded border">
                    <img
                      className="w-100 h-100  object-fit-cover "
                      src={pizza.image}
                    ></img>
                  </div>
                );
              })}
            </div>
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
