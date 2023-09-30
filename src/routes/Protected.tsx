import { Button } from "react-bootstrap";
import { isLoggedIn, setLogin } from "./Service";
import { Form, useLoaderData } from "react-router-dom";

export async function loader() {
  return isLoggedIn();
}

export async function action() {
  setLogin(true);
  return null;
}

function Protected() {
  const isLoggedIn = useLoaderData();

  if (isLoggedIn) return <div>Protected</div>;

  return (
    <Form method="post">
      <Button type="submit">Login</Button>
    </Form>
  );
}

export default Protected;
