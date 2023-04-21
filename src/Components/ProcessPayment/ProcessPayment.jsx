import React from "react";
import { CardElement, Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const ProcessPayment = () => {
  const stripePromise = loadStripe(
    "sk_test_51LrasiDnxedxlPaKVj5DLrf6MmP4hXHAAs3yGHwpuHbr1QSb3wWOPDDPODVyzOjv6ZBXC2CTaTtiaC5rw6z5IXkT00IO2WRE1L"
  );
  //   const options = {
  //     // passing the client secret obtained from the server
  //     clientSecret: "{{CLIENT_SECRET}}",
  //   };

  return (
    <div>
      <h1>payment</h1>
      <Elements stripe={stripePromise}>
        <CardElement
          options={{
            style: {
              base: {
                iconColor: "#c4f0ff",
                color: "#fff",
                fontWeight: "500",
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                ":-webkit-autofill": {
                  color: "#fce883",
                },
                "::placeholder": {
                  color: "#87BBFD",
                },
              },
              invalid: {
                iconColor: "#FFC7EE",
                color: "#FFC7EE",
              },
            },
          }}
        />
      </Elements>
    </div>
  );
};

export default ProcessPayment;
