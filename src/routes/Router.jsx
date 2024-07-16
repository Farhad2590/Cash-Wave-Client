import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import AdminHome from "../Pages/Dashboard/Homes/AdminHome/AdminHome";
import Allusers from "../Pages/Dashboard/Homes/AdminHome/Allusers";
import AllAgents from "../Pages/Dashboard/Homes/AdminHome/AllAgents";

// import Registers from "../Pages/Register/Registers";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      }

    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'allUsers',
        element: <Allusers></Allusers>
      },
      {
        path: 'allAgents',
        element: <AllAgents></AllAgents>
      },
    ]
  },
  
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Register /> },
])