import App from "@/App";
import ProtectedRoute from "@/components/Layout/ProtectedRoute";
import ContactPage from "@/components/shareHome/Contact";
import About from "@/pages/About/About";
import Cart from "@/pages/Cart/Cart";
import Home from "@/pages/Home/Home";
import AddProduct from "@/pages/ManageProduct/AddProduct";
import EditProduct from "@/pages/ManageProduct/EditProduct";
import ProductList from "@/pages/ManageProduct/ProductList";
import CheckPay from "@/pages/Payment/CheckPay";
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
        path: "/manage/product",
        element: <ProductList />,
      },
      {
        path: "/product/create",
        element: (
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "/product/:id",
        element: <EditProduct />,
      },
      {
        path: "/product/:category",
        element: <ProductDetails />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/check-pay",
        element: <CheckPay />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
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
