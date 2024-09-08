import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaUser } from "react-icons/fa";

const Navbar = () => {
  const products = useAppSelector((store) => store.cart.products);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dummy cart count (you can replace this with your cart state)
  const cartItemCount = 2;

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          FitGear
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/product" className="text-white hover:text-gray-200">
            Products
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 rounded-l-md border-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-white text-blue-500 p-2 rounded-r-md hover:bg-gray-200">
            Search
          </button>
        </div>

        {/* Cart and User Icons */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/cart" className="text-white relative">
            <FaShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {products.length}
              </span>
            )}
          </Link>
          <Link to="/login" className="text-white">
            <FaUser size={24} />
          </Link>
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
            className="block text-white text-center hover:text-gray-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block text-white text-center hover:text-gray-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="block text-white text-center hover:text-gray-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="block text-white text-center hover:text-gray-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cart ({cartItemCount})
          </Link>
          <Link
            to="/login"
            className="block text-white text-center hover:text-gray-200"
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
