import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: any }) => {
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
            <p className="text-lg font-bold text-green-600 ">{product.price}</p>

            <Link
              to={`/product/${product._id}`}
              className="bg-black text-white font-semibold p px-4 rounded-lg hover:bg-green-800 transition duration-300 shadow-md hover:shadow-lg"
            >
              Click to details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
