import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TbCreditCardPay } from "react-icons/tb";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";
import UseAuth from "../../hooks/UseAuth/UseAuth";
import { toast } from "sonner";
import UseCart from "../../hooks/UseCart/UseCart";
import useSignedInUser from "../../hooks/useSignedInUser/useSignedInUser";

const CheckoutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const [cart, refetch] = UseCart();
  const { cartProperties, cartItems } = cart;
  const [currentUserFromDB] = useSignedInUser();

  console.log(cart);

  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/api/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
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
        setTransactionId(paymentIntent.id);

        // Save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // need to use moment.js
          userId: currentUserFromDB._id,
          cartIds: cartItems.map((item) => item._id),
          propertyIds: cartItems.map((item) => item.propertyId),
          status: "onHold",
        };

        const res = await axiosSecure.post("/api/payment", payment);
        refetch();

        toast.success("You've paid the amount");
        navigate("/dashboard/myOrders");
        console.log("Payment saved to database", res.data);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="font-Nunito text-[25px] leading-15 font-[700] mt-10">
        Pay with Stripe
      </h1>
      <CardElement
        className="my-4"
        options={{
          style: {
            base: {
              fontSize: "18px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
              // border: "5px",
              borderColor: "#000",
              // margin: "10px",
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
