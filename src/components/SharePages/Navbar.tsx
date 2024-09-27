import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { logout } from "@/redux/features/userSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const selectedItems = useAppSelector((store) => store.cart.selectedItems);
  const products = useAppSelector((store) => store.cart.products);
  const loggedUser = useAppSelector((store) => store.user.user);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-slate-500 p-6 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex  items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-3xl font-bold hover:text-black">
          FitGear
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className="text-white text-base font-medium hover:text-black"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="text-white text-base font-medium hover:text-black"
          >
            Products
          </Link>

          <Link
            to="/manage/product"
            className="text-white text-base font-medium hover:text-black"
          >
            Manage Products
          </Link>
          <Link
            to="/product/create"
            className="text-white text-base font-medium hover:text-black"
          >
            Add Product
          </Link>

          <Link
            to="/contact"
            className="text-white text-base font-medium hover:text-black"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-white  text-base font-medium hover:text-black"
          >
            About
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/cart" className="text-white relative hover:text-black">
            <FaShoppingCart size={24} />

            {selectedItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ">
                {selectedItems}
              </span>
            )}
          </Link>
          {/* <span>
         
            if(loggedUser.admin)
             
                <button
                  onClick={handleLogout}
                  className="text-white text-base font-medium hover:text-black"
                >
                  Admin
                </button>
            
            }{" "}
          </span> */}
          {/* Authentication Buttons */}
          {loggedUser ? (
            <>
              <button
                onClick={handleLogout}
                className="text-white text-base font-medium hover:text-black"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-white text-base font-medium hover:text-black"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link
            to="/"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/manage/product"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Manage Products
          </Link>
          <Link
            to="/contact"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/cart"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cart ({products})
          </Link>
          <Link
            to="/login"
            className="block text-white text-center hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Account
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
