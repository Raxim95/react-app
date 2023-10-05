import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App";
import CheckOutRoot from "./routes/CheckOut/CheckOut";
import ErrorPage from "./error-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" errorElement={<ErrorPage />} element={<App />}></Route>
      <Route
        path="checkout"
        errorElement={<ErrorPage />}
        element={<CheckOutRoot />}
      ></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<RouterProvider router={router}></RouterProvider>);
