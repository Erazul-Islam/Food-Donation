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
import { Footer } from 'flowbite-react';
import Errorpage from './Pages/Errorpage';
import FeaturedDetail from './Components/Featured/FeaturedDetail';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import AuthProvider from './Components/Providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
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
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      },
      {
        path: '/detail/:_id',
        element: <FeaturedDetail></FeaturedDetail>,
        loader: () => fetch('http://localhost:5000/add')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
