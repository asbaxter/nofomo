import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm.js";

const PUBLIC_KEY =
  "pk_test_51LulVYIYYlWs0IlM5ryYG8XPRJqztmGJBa3c3T0i8G1XbSRGqYvim0mNHWPi2HKmf1ugO0R8wNYNMD9ih8CQuo5000vm2tMn3g";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
