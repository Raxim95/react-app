import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App></App>}></Route>)
);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<RouterProvider router={router}></RouterProvider>);
