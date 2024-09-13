import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

const CartDetails = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const handleQuantity = (type: string, _id: string) => {
    const payload = { type, _id };
    dispatch(updateQuantity(payload));
  };

  const handleRemove = (_id: string) => {
    dispatch(removeFromCart({ _id }));
  };

  return (
    <div className="w-4/6 mx-auto  bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg">
      <div className="flex items-center  justify-around space-x-4 border border-gray-300  p-4  ">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-md"
          />
        </div>
        <div className="lg:flex justify-between border  ">
          <div className="flex-grow ">
            <h3 className="text-lg font-semibold text-slate-700 truncate mb-2">
              {product.name}
            </h3>
            <p className="text-lg font-bold text-black">${product.price}</p>
          </div>
          <div className="flex items-center  space-x-2">
            <button
              onClick={() => handleQuantity("decrement", product._id)} // Use _id instead of id
              className="bg-sky-700 text-white p-2 rounded-full hover:bg-green-800"
              disabled={product.quantity === 1} // Prevent decrement below 1
            >
              Less
              {/* <Minus size={18} /> */}
            </button>
            <span className="text-lg font-semibold">{product.quantity}</span>
            <button
              onClick={() => handleQuantity("increment", product._id)} // Use _id instead of id
              className="bg-blue-700 text-white p-2 rounded-full hover:bg-green-800"
            >
              More
              {/* <Plus size={18} /> */}
            </button>

            <button
              onClick={() => handleRemove(product._id)} // Use _id instead of id
              className="bg-gray-300 text-black  rounded-full hover:bg-red-700"
            >
              Remove
              {/* <Trash2 size={18} /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
