import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import useOnlineStatus from "../services.tsx/useOnlineStatus";
import { Col, ListGroup, Row } from "react-bootstrap";

const tasks = ["Task1", "Task2", "Task3"];

export default function Root() {
  const isOnline = useOnlineStatus();
  const navigate = useNavigate();

  if (!isOnline) return <h1>You are OFFLINE</h1>;

  return (
    <div className="p-4">
      <Row>
        <Col lg={3}>
          <nav>
            <ListGroup>
              {tasks.map((task, index) => (
                <ListGroup.Item
                  key={index + 1}
                  action
                  onClick={() => navigate(`task${index + 1}`)}
                >
                  {task}
                  {/* <Link to={`task${index + 1}`}>{task}</Link> */}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </nav>
        </Col>
        <Col lg={9}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
}
