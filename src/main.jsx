import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home';
import AddFood from './Pages/AddFood';
import AvailableFood from './Pages/AvailableFood';
import ManageMyFood from './Pages/ManageMyFood';
import MyFoodReq from './Pages/MyFoodReq';
import Login from './Pages/Login';
import Register from './Pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addfood',
        element: <AddFood></AddFood>
      },
      {
        path: '/available',
        element: <AvailableFood></AvailableFood>
      },
      {
        path: '/manage',
        element: <ManageMyFood></ManageMyFood>
      },
      {
        path: '/myfood',
        element: <MyFoodReq></MyFoodReq>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
