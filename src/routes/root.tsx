import { Outlet, Link, Form, useLoaderData } from "react-router-dom";
import useOnlineStatus from "../services.tsx/useOnlineStatus";
import { isLoggedIn, setLogin } from "./Service";
import { Button, Stack } from "react-bootstrap";

export async function loader() {
  return isLoggedIn();
}

export async function action() {
  setLogin(false);
  return null;
}

export default function Root() {
  const isLoggedIn = useLoaderData();
  const isOnline = useOnlineStatus();

  if (!isOnline) return <h1>You are OFFLINE</h1>;

  let section: React.ReactElement;

  if (isLoggedIn) {
    section = (
      <div>
        <p>Sistemadan shıǵıw</p>
        <Form method="post">
          <Button type="submit">Log out</Button>
        </Form>
      </div>
    );
  } else {
    section = <p>Iltimas dizimnen ótiń</p>;
  }

  return (
    <Stack gap={3} className="p-4">
      {section}
      <Link to="public">public</Link>
      <Link to="protected">protected</Link>
      <Outlet></Outlet>
    </Stack>
  );
}
