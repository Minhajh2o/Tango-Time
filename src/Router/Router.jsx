import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import About from "../Components/About";
import Tutorial from "../pages/Tutorial";
import StartLearning from "../pages/StartLearning";
import Lesson from "../pages/layout_pages/Lesson";
import Login from "../pages/layout_pages/Login";
import Register from "../pages/layout_pages/Register";
import MyProfile from "../pages/layout_pages/MyProfile";
import UpdateProfile from "../pages/layout_pages/UpdateProfile";
import ForgotPassword from "../pages/layout_pages/ForgotPassword";
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
