import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import Task1 from "./routes/Task1/Task1";
import Task2 from "./routes/Task2/Task2";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="p-4">
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Task 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Task 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Task1 />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Task2 />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </React.StrictMode>
);
