
import { useGetProductDetailsQuery } from "@/redux/api/productApi/ProductApi";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((store) => store.cart.products);

  const { id } = useParams<{ id: string }>();
  const {
    data: productResponse,
    error,
    isLoading,
  } = useGetProductDetailsQuery(id || "");

  const product = productResponse?.data;

  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const cartItem = cartProducts.find((item: any) => item._id === id);
    if (cartItem) {
      setCartQuantity(cartItem.quantity);
    }
  }, [cartProducts, id]);

  const handleAddToCart = (product: any) => {
    if (cartQuantity < product.stock) {
      dispatch(addToCart({ ...product, quantity: cartQuantity + 1 }));
    }
  };

  const isAddToCartDisabled = cartQuantity >= product?.stock;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details</p>;

  return (
    <div className="mx-auto mt-2 py-4 left-0 w-full bg-slate-400">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product?.image}
            alt={product?.name}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
          <h1 className="text-3xl font-semibold text-gray-900">
            Name of Equipment: {product?.name}
          </h1>
          <p className="text-slate-900 text-xl mt-4">
            Product Category: {product?.category}
          </p>
          <p className="text-slate-900 text-xl mt-4">
            Description of Product: {product?.description}
          </p>
          <p className="text-slate-900 text-xl mt-4">
            $ Product Price: {product?.price.toFixed(2)}
          </p>
          <p className="text-slate-900 text-xl mt-4">
            Product in Stock Quantity: {product?.stock}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddToCart(product)}
            className={`mt-6 bg-green-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-800 transition duration-300 ${
              isAddToCartDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isAddToCartDisabled}
          >
            {isAddToCartDisabled
              ? "Max Stock Reached"
              : `Add to Cart (${cartQuantity})`}
          </button>

          {/* Show remaining stock if applicable */}
          {product?.stock - cartQuantity > 0 && (
            <p className="text-sm text-gray-600 mt-2">
              Only {product?.stock - cartQuantity} left in stock!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
