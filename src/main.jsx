import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout/Layout.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Blog from './components/Blog/Blog.jsx';
import AuthProvider, { AuthContext } from './provider/Authprovider.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import ViewDetails from './components/ViewDetails/ViewDetails.jsx';
import Recipes from './components/Recipes/Recipes.jsx';
import { Fade } from 'react-bootstrap';
import Fav from './components/Fav/Fav.jsx';
import Profile from './components/Profile/Profile.jsx';
import EmailVerification from './components/Login/EmailVerification.jsx';
import AboutUs from './components/Home/About/AboutUs.jsx';


const router = createBrowserRouter([
  
  {
    
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
              element: <Home></Home>                 
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/login/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: '/:id',
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>
      },
      
      {
        path: "/fav_recipe" ,
        element: <PrivateRoute>
          <Fav></Fav>
        </PrivateRoute>
      },
      {
        path:"/profile",
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>

      },{
        path: "/reset-password" ,
        element: <EmailVerification></EmailVerification>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
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
