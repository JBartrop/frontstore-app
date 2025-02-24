// import logo from './logo.svg';
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import './App.css';
import Dashboard from "./pages/dashboard";
import Error from "./pages/error";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Main from "./layouts/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        element: <Dashboard />
      },
      {
        index: true,
        path: "signin",
        element: <Login />
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
      <h1>hello world</h1>
      <ToastContainer />
    </div>
  );
}

export default App;
