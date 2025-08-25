import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { TbCreditCardPay } from "react-icons/tb";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState("");

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
        disabled={!stripe}
      >
        <TbCreditCardPay class="text-lg" />
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
