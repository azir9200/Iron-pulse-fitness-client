import App from "@/App";
import ContactPage from "@/components/shareHome/Contact";
import Cart from "@/pages/Cart/Cart";
import Home from "@/pages/Home/Home";
import ProductDetails from "@/pages/Product/ProductDetails";
import Product from "@/pages/Product/ProductPage";
import Login from "@/pages/User/Login";
import Register from "@/pages/User/Register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
