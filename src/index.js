import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home'
import SinglePost from './Pages/SinglePost'
import UserProfile from './Pages/UseProfile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
      {
        path: "/post/:id",
        element: <SinglePost/>,
  },
    {
      path: "/user/:id",
      element: <UserProfile/>,
},
]);
  
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
    <App />
  </React.StrictMode>,
)