import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import About from "../Components/About";
import Tutorial from "../Components/Tutorial";
import StartLearning from "../Components/StartLearning";
import Lesson from "../Components/Lesson";
import Login from "../Components/Login";
import Register from "../Components/Register";
import MyProfile from "../Components/MyProfile";
import UpdateProfile from "../Components/UpdateProfile";
import ForgotPassword from "../Components/ForgotPassword";
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
      { path: "forgot-password", element: <ForgotPassword /> },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
