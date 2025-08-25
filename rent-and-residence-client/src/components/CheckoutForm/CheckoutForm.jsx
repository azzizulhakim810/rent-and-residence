import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { TbCreditCardPay } from "react-icons/tb";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";

const CheckoutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();

  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");

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
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[Error]", error);
      setErrorMessage(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
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
