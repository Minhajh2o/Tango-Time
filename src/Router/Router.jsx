import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import About from "../Components/About";
import Tutorial from "../Components/Tutorial";
import StartLearning from "../Components/StartLearning";
import Layout from "../Layout/Layout";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "start-learning", Component: StartLearning },
      { path: "tutorial", Component: Tutorial },
      { path: "about", Component: About },
    ],
  },
]);

export default Router;
