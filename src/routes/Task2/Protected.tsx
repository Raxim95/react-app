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

  return (
    <>
      {isLoggedIn ? (
        <div>Protected</div>
      ) : (
        <div>
          <Form method="post">
            <button>Login</button>
          </Form>
        </div>
      )}
    </>
  );
}

export default Protected;
