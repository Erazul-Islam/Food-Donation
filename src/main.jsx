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
import Edit from './Pages/Edit';
import PrivateRoute from './Components/Authentication/PrivateRoute';
import Experiment from './Pages/Experiment';

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
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: '/available',
        element: <AvailableFood></AvailableFood>,
        loader: () => fetch('http://localhost:5000/avail')
      },
      {
        path: '/manage',
        element:<PrivateRoute> <ManageMyFood></ManageMyFood></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/avail')
      },
      {
        path: '/edit/:_id',
        element: <PrivateRoute><Edit></Edit></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/avail/${params._id}`)
      },
      {
        path: '/myfood',
        element: <PrivateRoute><MyFoodReq></MyFoodReq></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/request')
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
        element: <PrivateRoute><FeaturedDetail></FeaturedDetail></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/add')
      },
      {
        path: '/avail/:_id',
        element:<PrivateRoute><FoodDetail></FoodDetail></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/avail')
      },
      {
        path: '/a',
        element: <Experiment></Experiment>
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
