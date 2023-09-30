import {
  Form,
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLoaderData,
} from "react-router-dom";
import { isLoggedIn, setLogin } from "./Service";

import Public from "./Public";
import Protected, {
  loader as proLoader,
  action as loginaction,
} from "./Protected";
import ErrorPage from "../../error-page";

export async function loader() {
  return isLoggedIn();
}

export async function action() {
  setLogin(false);
  return null;
}

function Root() {
  const isLoggedIn = useLoaderData();

  return (
    <>
      {isLoggedIn ? (
        <div>
          <p>Sistemadan shıǵıw</p>
          <Form method="post">
            <button>Log out</button>
          </Form>
        </div>
      ) : (
        <p>Iltimas dizimnen ótiń</p>
      )}
      <p>
        <Link to="public">public</Link>
      </p>
      <p>
        <Link to="protected">protected</Link>
      </p>
      <Outlet></Outlet>
    </>
  );
}

function Task2() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="task2" element={<Root />} loader={loader} action={action}>
          <Route path="public" element={<Public />}></Route>
          <Route
            path="protected"
            element={<Protected />}
            loader={proLoader}
            action={loginaction}
          ></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default Task2;
