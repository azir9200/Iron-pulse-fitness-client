import { useGetProductDetailsQuery } from "@/redux/api/productApi/ProductApi";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.cart.products);

  const { id } = useParams<{ id: string }>();
  const {
    data: productResponse,
    error,
    isLoading,
  } = useGetProductDetailsQuery(id || "");

  // Extract product data from productResponse
  const product = productResponse?.data;

  console.log("Product data", product);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details</p>;

  const handleAddToCart = (product: any) => {
    // Dispatch the product data directly
    dispatch(addToCart(product));
    console.log("Added to cart:", product);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
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
            {product?.name}
          </h1>
          <p className="text-gray-700 text-lg mt-4">{product?.description}</p>
          <p className="text-2xl font-bold text-green-600 mt-6">
            ${product?.price}
          </p>

          <button
            onClick={() => handleAddToCart(product)}
            className="mt-6 bg-green-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-800 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
