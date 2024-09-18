import { useAppSelector } from "@/redux/hooks";
import CartDetails from "./CartDetails";
import OrderSummary from "@/components/SharePages/OrderSummary";

const Cart = () => {
  const products = useAppSelector((store) => store.cart.products);
  console.log("cart Products ", products);
  return (
    <div className="mx-auto mt-16 py-4 left-0 w-full bg-slate-300 ">
      <h1 className="text-4xl text-white text-center font-bold p-2 my-2 w-full bg-slate-600 mt-2">
        Cart Details
      </h1>
      <div className=" justify-center p-2 lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product: any) => (
              <CartDetails key={product.id} product={product} />
            ))
          ) : (
            <p className="text-2xl text-center text-red-500">
              You did not select any product !
            </p>
          )}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
