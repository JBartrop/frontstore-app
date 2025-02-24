// import logo from './logo.svg';
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import Dashboard, { dashboardLoader } from "./pages/dashboard";
import Error from "./pages/error";
import Signup from "./pages/signup";
import Login, { LoginAction } from "./pages/login";
import Main from "./layouts/main";
import Auth from "./layouts/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        loader: dashboardLoader,
        element: <Dashboard />
      }
    ]
  },
  {
    path:"/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        path: "signin",
        action:LoginAction,
        element: <Login  />
      },
      {
        index: true,
        path:"signup",
        element: <Signup />
      }
    ]
  },
  {
    path: "*",
    element: <Error />
  }
]);

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
