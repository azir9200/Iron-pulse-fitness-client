import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold text-green-600">
          Thank You for Your Purchase!
        </h1>
        <p className="mt-4 text-lg">
          Your payment was successful, and your order has been placed.
        </p>
        <p className="mt-2 text-md">
          We appreciate your business and hope you enjoy your new fitness
          equipment!
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
