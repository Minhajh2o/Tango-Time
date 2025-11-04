import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import About from "../Components/About";
import Tutorial from "../Components/Tutorial";
import StartLearning from "../Components/StartLearning";
import Lesson from "../Components/Lesson";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Layout from "../Layout/Layout";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "start-learning", element: <StartLearning /> },
      {
        path: "lesson/:lesson_no",
        element: (
          <PrivateRoute>
            <Lesson />
          </PrivateRoute>
        ),
      },
      {
        path: "tutorial",
        element: (
          <PrivateRoute>
            <Tutorial />
          </PrivateRoute>
        ),
      },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default Router;
