import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";
import axios from "axios";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm() {
  const savedPrice = localStorage.getItem("price");
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://shrouded-eyrie-44498.herokuapp.com/payment",
          {
            amount: savedPrice,
            id,
          }
        );

        if (response.data.success) {
          console.log("Successful Payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form className="payForm" onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow d-flex">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="payButton">Pay</button>
        </form>
      ) : (
        <div className="homeButtonHome d-flex justify-content-center align-items-center flex-column mt-5">
          <h2 className="d-flex justify-content-center mt-5">
            Payment Successful
          </h2>
          <Button
            className="mt-5"
            style={{
              width: 300,
            }}
            onClick={() => window.location.reload()}
          >
            Return to Home
          </Button>
        </div>
      )}
    </>
  );
}
