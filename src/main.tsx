import React from "react";
import ReactDOM from "react-dom/client";

import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import Root, { loader as rootlader } from "./routes/root";
import ErrorPage from "./error-page";

import Home from "./routes/Home";
import Users from "./routes/Users";
import User, { loader as userloader } from "./routes/User";
import UserType from "./Types/UserType";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={rootlader}
    >
      <Route index element={<Home />}></Route>
      <Route
        path="users"
        element={<Users />}
        handle={{
          crumb: () => <Link to="users">Users</Link>,
        }}
      >
        <Route
          path=":userId"
          element={<User />}
          loader={userloader}
          handle={{
            crumb: (user: UserType) => <span>{user.name}</span>,
          }}
        ></Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
