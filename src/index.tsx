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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}></Route>
      <Route path="checkout" element={<CheckOutRoot />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<RouterProvider router={router}></RouterProvider>);
