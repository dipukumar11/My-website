import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Component/Layout/Home/Home.jsx';
import About from './Component/Pages/About/About.jsx';
import Service from './Component/Pages/Service/Service.jsx';
import Portfolio from './Component/Pages/Portfolio/Portfolio.jsx';
import Contact from './Component/Pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/service',
        element:<Service></Service>
      },
      {
        path:'/portfolio',
        element:<Portfolio></Portfolio>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
