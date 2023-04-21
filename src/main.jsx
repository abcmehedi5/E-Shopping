import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import cartProductsLoader from "./Components/Loader/cartProductsLoader";
import Checkout from "./Components/Checkout/Checkout";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/Provider/AuthProvider";
import PrivateRouter from "./Routes/PrivateRouter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
        // loader: () => fetch("/products.json"),
        loader: cartProductsLoader,
      },
      {
        path: "product/:productId",
        element: <SingleProduct></SingleProduct>,
        loader: () => fetch("/products.json"),
      },

      {
        path: "/checkout",
        element: (
          <PrivateRouter>
            <Checkout></Checkout>
          </PrivateRouter>
        ),
        loader: cartProductsLoader,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
