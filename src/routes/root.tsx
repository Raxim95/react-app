import { Outlet, useLoaderData } from "react-router-dom";
import useOnlineStatus from "../services.tsx/useOnlineStatus";
import { Col, Container, Row } from "react-bootstrap";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { getUsers } from "../services.tsx/services";
import UserType from "../Types/UserType";

export async function loader() {
  const users = await getUsers();
  return users;
}

export default function Root() {
  const isOnline = useOnlineStatus();

  const users = useLoaderData() as UserType[];

  if (!isOnline) return <h1>You are OFFLINE</h1>;

  return (
    <>
      <Header></Header>
      <Row>
        <Col md={4} lg={3}>
          <Sidebar users={users}></Sidebar>
        </Col>
        <Col md={8} lg={9}>
          <Outlet className="main"></Outlet>
        </Col>
      </Row>
    </>
  );
}
