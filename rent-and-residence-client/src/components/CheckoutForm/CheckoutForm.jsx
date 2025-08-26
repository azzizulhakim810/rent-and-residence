import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { TbCreditCardPay } from "react-icons/tb";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";
import UseAuth from "../../hooks/UseAuth/UseAuth";
import { toast } from "sonner";
import UseCart from "../../hooks/UseCart/UseCart";
import useSignedInUser from "../../hooks/useSignedInUser/useSignedInUser";

const CheckoutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const [cart] = UseCart();
  const { cartProperties, cartItems } = cart;
  const [currentUserFromDB] = useSignedInUser();
  // console.log(cart);

  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // If the stripe hasn't loaded or card elements couldn't be found, then kicks out
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Create Payment Method
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[Error]", error);
      setErrorMessage(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // Confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm Error", confirmError);
    } else {
      console.log("Payment Intent", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        toast.success("You've paid the amount");
        setTransactionId(paymentIntent.id);

        // Save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // need to use moment.js
          cartId: cartItems.map((item) => item._id),
          propertyId: cartItems.map((item) => item._id),
          userId: currentUserFromDB._id,
          status: "pending",
        };

        const res = await axiosSecure.post("payment", payment);
        console.log("Payment saved to database", res);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "18px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="text-red-500 text-[14px]">{errorMessage}</p>
      {transactionId && (
        <p className="text-green-500 text-[14px]">
          Transaction Id is {transactionId}
        </p>
      )}

      <button
        className="btn bg-C_purple text-white hover:bg-[#40384B] rounded-md px-6"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        <TbCreditCardPay class="text-lg" />
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
