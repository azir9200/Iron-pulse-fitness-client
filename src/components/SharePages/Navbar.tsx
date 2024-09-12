import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaUser } from "react-icons/fa";

const Navbar = () => {
  const selectedItems = useAppSelector((store) => store.cart.selectedItems);
  const products = useAppSelector((store) => store.cart.products);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            className="text-white text-2xl font-bold hover:text-black"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="text-white text-2xl font-bold hover:text-black"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="text-white text-2xl font-bold hover:text-black"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-white text-2xl font-bold hover:text-black"
          >
            About
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 rounded-l-md border-none focus:ring-2 focus:ring-blue-300 text-white text-xl font-bold "
          />
          <button className="bg-white text-black p-2 rounded-r-md hover:bg-slate-700 text-xl font-bold">
            Search
          </button>
        </div>

        {/* Cart and User Icons */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* copy */}
          <Link to="/cart" className="text-white relative hover:text-black">
            <FaShoppingCart size={24} />
            {/* Display cart item count if there are items in the cart */}
            {selectedItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ">
                {selectedItems}
              </span>
            )}
          </Link>
          <Link to="/login" className="text-white hover:text-black">
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
