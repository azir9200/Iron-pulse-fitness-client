/* eslint-disable @typescript-eslint/no-explicit-any */
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="relative">
      <div className="border rounded-lg shadow-lg overflow-hidden bg-grey transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover transition-opacity duration-300 hover:opacity-75"
        />
        <div className="bg-blue-100  flex flex-col flex-grow">
          <div className=" flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              {product.name}
            </h3>

            <p className="text-gray-700  flex-grow">{product.description}</p>
            <p className="text-lg font-bold text-green-600 ">
              {" "}
              ${product.price}
            </p>

            <div className="flex gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
                className="bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
              >
                Add to Cart
              </button>
              <Link
                to={`/product/${product._id}`}
                className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 shadow-md hover:shadow-lg"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
