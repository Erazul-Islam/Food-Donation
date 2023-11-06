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
import ManageMyFood from './Pages/ManageMyFood';
import MyFoodReq from './Pages/MyFoodReq';
import { Footer } from 'flowbite-react';
import Errorpage from './Pages/Errorpage';
import FeaturedDetail from './Components/Featured/FeaturedDetail';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import AuthProvider from './Components/Providers/AuthProvider';
import AvailableFood from './Components/AvailableFood/AvailableFood';
import FoodDetail from './Components/AvailableFood/FoodDetail';

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
        element: <AvailableFood></AvailableFood>,
        loader: () => fetch('http://localhost:5000/avail')
      },
      {
        path: '/manage',
        element: <ManageMyFood></ManageMyFood>,
        loader: () => fetch('http://localhost:5000/avail')
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
      {
        path: '/avail/:_id',
        element: <FoodDetail></FoodDetail>,
        loader: () => fetch('http://localhost:5000/avail')
      }
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
