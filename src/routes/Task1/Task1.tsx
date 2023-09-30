import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Button, Stack } from "react-bootstrap";

import ErrorPage from "../../error-page";

import Characters, { loader as charactersLoader } from "./Characters";
import Character, { loader as characterLoader } from "./Character";

function Root() {
  return (
    <Stack gap={2}>
      <Link to={"characters"}>
        <Button className="w-100">Characters</Button>
      </Link>
      <Link to="characters">
        <Button className="w-100">Episodes</Button>
      </Link>
    </Stack>
  );
}

function Task1() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="task1" element={<Task1 />}></Route>

        <Route
          path="task1/characters"
          element={<Characters />}
          loader={charactersLoader}
        ></Route>

        <Route
          path="task1/characters/:characterName"
          element={<Character />}
          loader={characterLoader}
        ></Route>
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default Task1;
