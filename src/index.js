import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Productspage from './pages/Productspage';
import Contactpage from './pages/Contactpage';
import Blogpage from './pages/Blogpage';
import Appcontext from './context/Appcontext';
import Cartpage from './pages/Cartpage';
import Signinpage from './pages/Signinpage';
import Signuppage from './pages/Signuppage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "about",
    element: <Aboutpage />,
  },
  {
    path: "products",
    element: <Productspage />,
  },
  {
    path: "contact",
    element: <Contactpage />,
  },
  {
    path: "blog",
    element: <Blogpage />,
  },
  {
    path: "cart",
    element: <Cartpage/>,
  },
  {
    path: "signin",
    element: <Signinpage/>,
  },
  {
    path: "signup",
    element: <Signuppage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appcontext>
      <RouterProvider router={router} />
    </Appcontext>
  </React.StrictMode>
);

reportWebVitals();
