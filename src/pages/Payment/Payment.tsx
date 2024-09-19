import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51OaJj1HpVhNtoUJScbdpIoT6JZfyJvG9yg796YEu259r1pyhG2AJnTAfIaLxtkupy5J3XPyksw0KopQdONguoxof00KAMbJKzE"
);

const Payment = () => {
  return (
    <div>
      <h2 className="text-2xl"> Please enter credentials</h2>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
