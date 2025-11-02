import { createBrowserRouter } from "react-router/dom";
import Home from "../Layout/Home";

const Router = createBrowserRouter([
  { path: "/", Component: Home },
]);

export default Router;
