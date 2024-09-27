import App from "@/App";
import ContactPage from "@/components/shareHome/Contact";
import About from "@/pages/About/About";
import Cart from "@/pages/Cart/Cart";
import Home from "@/pages/Home/Home";
import AddProduct from "@/pages/ManageProduct/AddProduct";
import EditProduct from "@/pages/ManageProduct/EditProduct";
import ProductList from "@/pages/ManageProduct/ProductList";
import ProductDetails from "@/pages/Product/ProductDetails";
import Product from "@/pages/Product/ProductPage";
import Login from "@/pages/User/Login";
import Register from "@/pages/User/Register";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage.js";
import ProtectedRoute from "@/components/Layout/ProtectedRoute.js";
import Payment from "@/pages/Payment/Payment.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/manage/product",
        element: (
          <ProtectedRoute>
            {" "}
            <ProductList />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/product/create",
        element: (
          <ProtectedRoute>
            {" "}
            <AddProduct />{" "}
          </ProtectedRoute>
        ),
      },

      {
        path: "/product/update/:id",
        element: (
          <ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "/product/:category",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            {" "}
            <Cart />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },

      {
        path: "/about",
        element: <About />,
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
