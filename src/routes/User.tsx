import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getUserById } from "../services.tsx/services";
import UserType from "../Types/UserType";
import { Card, Col, Row } from "react-bootstrap";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = parseInt(params.userId as string);
  const user = await getUserById(id);
  localStorage.setItem("userName", user.name);
  return user;
}

function User() {
  const user = useLoaderData() as UserType;
  return (
    <div className="p-3">
      <Row>
        <Col lg={4} className="pb-sm-3">
          <Card className="p-3">
            <Card.Title>{user.name + " " + user.username}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Card>
        </Col>
        <Col lg={8}>
          <Card className="p-3">
            <p>
              <b>Company:</b>
              <span className="ms-3">{user.company.name}</span>
            </p>
            <p>
              <b>Phone:</b>
              <span className="ms-3">{user.phone}</span>
            </p>
            <p>
              <b>Website:</b>
              <span className="ms-3">{user.website}</span>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default User;
