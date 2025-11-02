import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";

const Router = createBrowserRouter([
  { path: "/", Component: Home },
]);

export default Router;
