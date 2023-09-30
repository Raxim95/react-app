import React from "react";
import ReactDOM from "react-dom/client";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Characters, { loader as charactersLoader } from "./routes/Characters";
import Character, { loader as characterLoader } from "./routes/Character";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Episodes from "./routes/Episodes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}></Route>
      <Route
        path="characters"
        element={<Characters />}
        loader={charactersLoader}
      ></Route>

      <Route
        path="characters/:characterName"
        element={<Character />}
        loader={characterLoader}
      ></Route>

      <Route path="episodes" element={<Episodes />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
