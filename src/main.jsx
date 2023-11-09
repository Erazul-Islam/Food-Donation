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
import SingleManage from './Pages/SingleManage';

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
        loader: () => fetch(' https://share-eat-server.vercel.app/avail')
      },
      {
        path: '/manage',
        element:<PrivateRoute> <ManageMyFood></ManageMyFood></PrivateRoute>,
        loader: () => fetch(' https://share-eat-server.vercel.app/avail')
      },
      {
        path: '/single/:_id',
        element: <SingleManage></SingleManage>,
        loader: () => fetch(' https://share-eat-server.vercel.app/request')
      },
      {
        path: '/edit/:_id',
        element: <PrivateRoute><Edit></Edit></PrivateRoute>,
        loader: ({params}) => fetch(` https://share-eat-server.vercel.app/avail/${params._id}`)
      },
      {
        path: '/myfood',
        element: <PrivateRoute><MyFoodReq></MyFoodReq></PrivateRoute>,
        loader: () => fetch(' https://share-eat-server.vercel.app/request')
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
        loader: () => fetch(' https://share-eat-server.vercel.app/add')
      },
      {
        path: '/avail/:_id',
        element:<PrivateRoute><FoodDetail></FoodDetail></PrivateRoute>,
        loader: () => fetch(' https://share-eat-server.vercel.app/avail')
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
